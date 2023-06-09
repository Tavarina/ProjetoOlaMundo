import './Post.css';
import styles from './Post.module.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams();

const post = posts.find((post) => {
    return post.id === Number(parametros.id);
})

if (!post){
    return <NaoEncontrada/>
}

const postsRecomendados = posts
.filter((post) => post.id !== Number(parametros.id))
.sort((a, b) => b.id - a.id)
.slice(0, 4);

console.log(postsRecomendados);

 return (
 <Routes> 
    <Route path='*' element={<PaginaPadrao/>}>
       <Route index element={
       <PostModelo 
       fotoCapa={`/assets/posts/${post.id}/capa.png`}
       titulo={post.titulo}>
    <div className="post-markdown=container">
        <ReactMarkdown>
            {post.texto}
        </ReactMarkdown>
    </div>
    <h2 className={styles.titulosOutrosPosts}>
        Outros posts que você pode gostar:
    </h2>
    <ul className={styles.postsRecomendados}>
        {postsRecomendados.map((post) =>(
            <li key={post.id}>
                <PostCard post={post} />
            </li>
        ))}
    </ul>
</PostModelo>}
/> 

     </Route>
    </Routes>

    )
}

{/* o objeto parametros tem aquela propriedade, e o valor dela é sempre uma string, e eu utilizei o operador de igualdade restrita do JavaScript, coloquei ===. Então parametros.id é sempre uma string, mesmo que seja uma string 1, ele não vai encontrar o post de ID 1, porque o ID que tem no json, podemos até olhar, eles são sempre numéricos. */}
{/*Markdown é uma linguagem de marcação,
é como podemos colocar certas sintaxes, onde dizemos o que é título, falamos o que é subtítulo, temos uma sintaxe para link também, que utiliza colchete com parênteses */}