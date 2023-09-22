import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homecrud from "./Component/Homecrud"
import User from "./Component/User"
import Createuser from "./Component/Createuser"
import Editusers from "./Component/Editusers"


const App=()=>{
    return(
        <div>
           <BrowserRouter>
                <Homecrud/>

                <Routes>
                    <Route element={<Createuser/>} path="/"/>
                    <Route element={<User/>} path="/user"/>
                    <Route element={<Editusers/>} path="/edit/:index"/>
                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App