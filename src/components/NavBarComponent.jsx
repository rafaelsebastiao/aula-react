import style from '../styles/NavBarComponent.module.css';
import { Link } from 'react-router-dom';


export function NavBarComponent(){
    return(
        <nav>
            <h2 >Barra de navegação</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="book">Livro</Link></li>
                <li><Link to="curiosity">Curiosidade</Link></li>
            </ul>
        </nav>
    )
}