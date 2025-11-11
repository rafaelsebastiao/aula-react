import style from  '../styles/components/MainComponent.module.css';

export function MainComponent({children}){
    return(
        <main className={style.container}>
            {children}
        </main>
    )
}