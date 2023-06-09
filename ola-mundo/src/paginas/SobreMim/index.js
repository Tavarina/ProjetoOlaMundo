import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.JPG";

export default function SobreMim() {
    return(
        <PostModelo
         fotoCapa={{fotoCapa}}
         titulo="Sobre mim"
         >
            <h3 className={styles.subtitulo}>
              Olá, eu sou a Fabi!
            </h3>
            <img 
            src={fotoSobreMim}
            alt="Foto da Fabiana Oliveira"
            className={styles.fotoSobreMim}
            />
            
                    
        <p className={styles.paragrafo}> 
           Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>
        <p>
            Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>           
        <p className={styles.paragrafo}> 
            Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>   
        <p className={styles.paragrafo}> 
            Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>    
        <p className={styles.paragrafo}> 
            Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>    
        <p className={styles.paragrafo}> 
            Olá, tudo bem? Sou uma recem chegada na programação, e estou feliz em apresentar minha evolução e aprendizando com você.
        </p>
        </PostModelo>
        )
}