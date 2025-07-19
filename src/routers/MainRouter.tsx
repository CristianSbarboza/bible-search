import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../page/Home";
import { FavoritePage } from "../page/FavoritePage";

export function MainRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favoritePage" element={<FavoritePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}