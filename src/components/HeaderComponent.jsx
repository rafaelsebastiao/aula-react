import style from '../styles/HeaderComponent.module.css';
import logo from '../assets/icone-logo.png'

export function HeaderComponent(){
    return(
        <header className={style.header}>
            <h1>Cabeçalho</h1>
            <img src={logo} />
        </header>
    )
}