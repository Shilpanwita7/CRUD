import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import style from "./home.module.css"



const Editusers=()=>{
    let [name, setName]=useState("")
    let [sal, setSal]=useState("")
    let [com, setCom]=useState("")

    let {index} = useParams()
    let navigator=useNavigate()
    // console.log(index)

    
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salData=(e)=>{
        e.preventDefault()
        setSal(e.target.value)
    }
    let comData=(e)=>{
        e.preventDefault()
        setCom(e.target.value)
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((resp)=>{
        console.log(resp.data)
        setName(resp.data.name)
        setSal(resp.data.sal)
        setCom(resp.data.com)
    })
    },[])
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,sal,com}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN SUCCESSFULLY UPDATED")
        })                                                                           
        navigator("/user")
        }

    return(
        <div id={style.myForm}>

            <form action="">
                <tr>
                    <th><h2>Update User Details</h2></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td><input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td><input type="text" value={sal} onChange={salData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td><input type="text" value={com} onChange={comData}/></td>
                </tr>
                <tr>
                    <th onClick={formHandle}><button>Update</button></th>
                </tr>
            </form>
        
        </div>
    )
}
export default Editusers