import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../front/home/home";
import Post from "../front/post/pos";
import Publishion_jusid from "../front/components/publishion_jusid/publishion_jusid";
import News from "../front/components/news/news";
import Services from "../front/services/services";



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>

                </Route>
                <Route path="/post" element={<Post/>}> 
                    <Route path="publishion_jusid/:publi" element={<Publishion_jusid/>}></Route>
                </Route>
                <Route path="/news" element={<News/>}>
                </Route>
                <Route path="/services" element={<Services/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

