import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"


const Createuser=()=>{
    let [name, setName]=useState("")
    let [sal, setSal]=useState("")
    let [com, setCom]=useState("")

    let navigator=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salData=(e)=>{
        setSal(e.target.value)
    }
    let comData=(e)=>{
        setCom(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,sal,com}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("SOMETHING IS FISHY");
        })
        navigator("/user")
    }

    return(
        <div id={style.myForm}>

            <form action="">
                <tr>
                    <th><h2>User Details</h2></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td><input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td><input type="text" value={sal} onChange={salData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td><input type="text" value={com} onChange={comData} /></td>
                </tr>
                <tr>
                    <th><button onClick={formHandle}>Submit</button></th>
                </tr>
            </form>
        
        </div>
    )
}
export default Createuser