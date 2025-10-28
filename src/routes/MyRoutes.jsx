//npm -i react-router-dom

import { Routes, Route } from "react-router-dom";
import { Inicial } from "../pages/Inicial";
import { Home } from "../pages/Home";
import { Curiosity } from "../pages/Curiosity";
import { Author } from "../pages/Author";


export function MyRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Home />} />
                <Route path='book' element={<Author />}/>
                <Route path='curiosity' element={<Curiosity />}/>
            </Route>
        </Routes>
    )
}

