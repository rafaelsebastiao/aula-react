import style from '../styles/components/HeaderComponent.module.css';

export function HeaderComponent(){
    return(
        <header className={style.header}>
            <h1 className={style.title}>Stell Ball Run</h1>
        </header>
    )
}