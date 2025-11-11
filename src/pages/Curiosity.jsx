import { MainComponent } from '../components/MainComponent'
import style from '../styles/pages/Curiosity.module.css'

export function Curiosity(){
    return(
        <MainComponent>
            <h2 className={style.title}>Curiosidades</h2>
            <ul className={style.text}>
                <li>Início na arte: Araki começou a desenhar mangás na quarta série, aos 9 anos, após um amigo elogiar seus desenhos.</li>
            </ul>  
            <ul>
                <li>a</li>
                <li>b</li>
            </ul>
        </MainComponent>
       
    )

}