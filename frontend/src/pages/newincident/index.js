import React, {useState} from 'react'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from "react-icons/fi"
import './style.css'
import api from '../../services/api'


export default function NewIncident(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()

        const data ={
            title,
            description,
            value
        }

        try{
            await api.post('incidents', data, {
                headers :{
                    ong: ongId
                }
            })
            history.push('/profile')
        }catch(err){
            alert("Erro ao cadastrar Novo Caso")
        }

    }


    return(
        <div className="new-incident">
            <div className="content">
            <div className="section">
            
            <img src={logoimg} alt=""/>
            <h1>Cadastro Novo Caso</h1>
            <p>Descreva o caso detalhadamente</p>

            <Link className="back-a" to="/profile">
                <FiArrowLeft size={18} color="#E02041"/>
                Voltar para home
            </Link>
            </div>
            <form onSubmit={handleNewIncident} >
                <input placeholder="Titulo do caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea  placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <input placeholder="valor em reais"
                value={value}
                onChange={e => setValue(e.target.value)}
                />

                
                <button className="button">Cadastrar</button>


            </form>
            </div>


        </div>
    )
}