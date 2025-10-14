import {HeaderComponent} from '../components/HeaderComponent'
import {NavBarComponent} from '../components/NavBarComponent'
import {MainComponent} from '../components/MainComponent'
import { Outlet } from 'react-router-dom'

export function Inicial(){
    return (
        <>
            <HeaderComponent /> 
            <NavBarComponent />
            <Outlet/>
        </>
    )
}