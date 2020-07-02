import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'
import {FiArrowLeft} from "react-icons/fi"
import logoimg from '../../assets/logo.svg'
import api from '../../services/api'




export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()


   async function register(e){
    e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf
        }
        try{
        const response = await api.post('ongs', data)
        alert(`Seu id é : ${response.data.id}`)
        history.push('/')
        }catch(err){
            alert("Erro no cadastro, tente novamente")
        }
    
    }

    




    return(
        <div className="register-container">
            <div className="content">
            <div className="section">
            
            <img src={logoimg} alt=""/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro</p>

            <Link className="back-a" to="/">
                <FiArrowLeft size={18} color="#E02041"/>
                Não tenho Cadastro
            </Link>
            </div>
            <form onSubmit={register}>
                <input type="text" placeholder="Nome da Ong"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input type="email" placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input type="text" placeholder="WhatsApp"
                value={whatsapp}
                onChange={e => setWhatsApp(e.target.value)}
                />

                <div className="input-group">
                <input type="text" placeholder="Cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
                />
                <input type="text" placeholder="UF" style={{ width:80}} 
                value={uf}
                onChange={e => setUF(e.target.value)}
                />
                </div>
                <button className="button">Cadastrar</button>


            </form>
            </div>
        </div>
    )
}
