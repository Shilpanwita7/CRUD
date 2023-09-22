import React, {useEffect, useState} from "react";
import axios from "axios"
import style from "./home.module.css"
import {Link} from "react-router-dom"

const User=()=>{
    let [content, setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>{
            // console.log(res.data)
            setContent(res.data)
        })
    },[])

    let deleteData=(id)=>{
        console.log(id);        
        axios.delete(`http://localhost:3000/users/${id}`)
        window.location.assign("/user")
    }

    return(
        <div id={style.userPage}>
            {content.map((x)=>{
                return(
                    <div id={style.card}>
                        {/* <h1>{x.id}</h1>
                        <h1>{x.name}</h1>
                        <h1>{x.com}</h1> */}
                        <table>
                            <tr>
                                <td><h4>Id</h4></td>
                                <td><h4>:{x.id}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Name</h4></td>
                                <td><h4>:{x.name}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Salary</h4></td>
                                <td><h4>:{x.sal}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Company</h4></td>
                                <td><h4>:{x.com}</h4></td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <a href="">EDIT</a> */}
                                    <Link to={`/edit/${x.id}`}>EDIT</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={()=>{deleteData(x.id)}}>DELETE</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default User