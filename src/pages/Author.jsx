import style from '../styles/Author.module.css'

import autor from '../assets/hirohiko.jfif'

export function Author(){
    return(
        <main className={style.container}>
            <h2 className={style.title}>Author</h2>
            <h3>Hirohiko Araki</h3>
            <img src={autor} alt="" />

            <p>Hirohiko Araki is a Japanese manga artist known for his series JoJo's Bizarre Adventure, first published in Weekly Shōnen Jump in 1987, which has sold over 100 million copies in Japan alone to date. He is also known for his fondness for references to Western rock and Italy, both of which Araki has shown a strong fondness for.[1] He made his debut under the name Toshiyuki Araki (荒木 利之, Araki Toshiyuki) in 1980 with his one-shot Poker Under Arms, and began his professional career with the series Cool Shock B.T., Baoh, and The Gorgeous Irene.</p>
        </main>
    )
    
}
