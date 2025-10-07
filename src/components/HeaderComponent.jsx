import style from './HeaderComponent.module.css';

export function HeaderComponent(){
    return(
        <header >
            <h1 className={style.header}>Cabeçalho</h1>
        </header>
    )
}