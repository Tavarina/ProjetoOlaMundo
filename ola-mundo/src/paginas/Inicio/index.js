import PostCard from "componentes/PostCard";
// import Banner from "../../componentes/Banner";
import styles from './Inicio.module.css';

import posts from 'json/posts.json';

export default function Inicio(){
    return (
        // <main>
        // <Banner/>
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
        // </main>
         
    )
}