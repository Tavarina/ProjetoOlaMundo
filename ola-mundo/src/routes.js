import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu/>
    <Routes> {/*/Routes é como se fosse um roteador, ele vai controlar o que aparece na tela*/}
    <Route path='/' element={<PaginaPadrao />}>  {/* Rotas alinhadas - No caso essa rota se torna pai de outras rotas  */}
    <Route path="/" element={<Inicio/>}/>
    <Route path="sobremim" element={<SobreMim/>}/>
    </Route>

   {/* 
   Na rota "/", a estrutura a ser renderizada é:
   
   <PaginaPadrao>
   <Inicio />
   </PaginaPadrao
   
   Na rota "/sobremim". a estrutura a ser renderizada é:
   <PaginaPadrao>
    <SobreMim />
    </PaginaPadrao>

   */}
   <Route path='posts/:id' element={<Post/>} />
   <Route path='*' element={<NaoEncontrada/>} />{/*Se vc colocar o * ele vai entender como página coringa, então se digitar errado ele te encaminhara para essa div página não encontrada*/}
    </Routes>

    <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
