import style from './Home.module.css'

import bookImage from '../assets/steel-ball-run.jpg'


export function Home(){
    return(
        <main className={style.container}>
            <h2 className={style.title}>Sinopse</h2>
            <p className={style.text}>Steel Ball Run (スティール・ボール・ラン Sutīru Bōru Ran) é a sétima parte de JoJo's Bizarre Adventure, serializada na Weekly Shōnen Jump em 2004 e na Ultra Jump entre 2005 e 2011.</p>
            <p className={style.text}>Ambientado nos Estados Unidos em 1890, a história segue Johnny Joestar, um ex-jóquei paraplégico, e Gyro Zeppeli, mestre em uma arte mística chamada Spin, enquanto competem com um grande número de outros na corrida Steel Ball Run: um corrida louca pela América por um grande prêmio de 50 milhões de dólares.</p>

            <p className={style.text}>Steel Ball Run descreve uma nova continuidade além daquela detalhada na Parte 1-6 da série. Além dos principais recursos de JoJo, como Stands, a história é marcada por muitas referências à série original.</p>
            
            <img src={bookImage} width="250"alt="" />
        </main>
        
    )
}