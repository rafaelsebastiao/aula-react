import style from '../styles/pages/Author.module.css'
import autor from '../assets/hirohiko_araki.webp'
import { MainComponent } from '../components/MainComponent'

export function Author(){
    return(
        <MainComponent>
            <h2 className={style.title}>Author</h2>
            <h3 className={style.title}>Hirohiko Araki</h3>
            <img src={autor} alt="" />

            <p className={style.text}>Hirohiko Araki is a Japanese manga artist known for his series JoJo's Bizarre Adventure, first published in Weekly Shōnen Jump in 1987, which has sold over 100 million copies in Japan alone to date. He is also known for his fondness for references to Western rock and Italy, both of which Araki has shown a strong fondness for.[1] He made his debut under the name Toshiyuki Araki (荒木 利之, Araki Toshiyuki) in 1980 with his one-shot Poker Under Arms, and began his professional career with the series Cool Shock B.T., Baoh, and The Gorgeous Irene.</p>
        </MainComponent>
           
    )
    
}
