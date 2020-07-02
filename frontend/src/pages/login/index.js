import React, {useState} from 'react'
import './style.css'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import heroesimg from '../../assets/heroes.png'
import api from '../../services/api'

import {FiLogIn} from "react-icons/fi"


export default function Login(){
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions', { id })
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongname', response.data.name)
            history.push('/profile')
            
        }catch(err){
            alert("Falha no login, tente novamente")
        }


    }


    return(
        <div className="login-container">
            <div className="form">
            <img src={logoimg} alt=""/>
            <form onSubmit={handleLogin} >
            <h1>Faça seu Cadastro</h1>
            <input placeholder="Sua ID"
            value={id}
            onChange ={e => setId(e.target.value)}
            
            />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-a" to="/register">
                <FiLogIn size={18} color="#E02041"/>
                Não tenho Cadastro
            </Link>
            </form>
            </div>
            <img src={heroesimg} alt="" />
        </div>
    )
}