import { MainComponent } from '../components/MainComponent'
import style from '../styles/pages/Curiosity.module.css'

import bookImage from '../assets/book/rohan-no-louvre.jpg'
import artImage from '../assets/arts/evolution-art.webp'
import authorImage from '../assets/author/hirohiko_akari_young.jpeg'


export function Curiosity(){
    return(
        <MainComponent>
            <h2 className={style.title}>Curiosidades</h2>
            <ul className={style.text}>
                
                <li><strong>Início na arte: </strong>Araki começou a desenhar mangás na quarta série, aos 9 anos, após um amigo elogiar seus desenhos.</li>
                <img className={style.artImage} src={artImage} alt="" width="450px"/>
                
                <li><strong>Participação no Louvre: </strong>Foi o primeiro mangaká japonês a ser convidado para o projeto de quadrinhos do Museu do Louvre, produzindo o mangá "Rohan lo Louvre".</li>
                <img src={bookImage} className={style.bookImage}width="200px" alt="" />
                
                <li><strong>Estilo de vida:</strong> Segundo ele, seu visual jovial se deve a hábitos como lavar o rosto com água da torneira, não trabalhar antes das 10 da manhã e trabalhar apenas quatro dias por semana.</li>

                <img src={authorImage} className={style.authorImage} width="200px" alt="" />
            </ul>  
        </MainComponent>
    )

}