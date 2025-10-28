import style from '../styles/NavBarComponent.module.css';
import { Link } from 'react-router-dom';


export function NavBarComponent(){
    return(
        <nav className={style.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="book">Authors</Link></li>
                <li><Link to="curiosity">Curiosities</Link></li>
            </ul>
        </nav>
    )
}