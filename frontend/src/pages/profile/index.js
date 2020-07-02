import React, {useEffect, useState} from 'react'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'


import './style.css'

export default function Profile(){
    const ongname = localStorage.getItem('ongname')
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])
    const history = useHistory()


    useEffect(() => {
        api.get('profile', {
            headers : {
                ong:ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })

    }, [ongId])



    async function handleDelete(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers : {
                    ong:ongId
                }
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        }catch(err){
            alert('Erro ao deletar, tente novamente')
          
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push("/")


    }

    return (
        <div className="profile-container">
        <header>
        <img src={logoimg} alt=""/>
        <span>Bem vindo, {ongname}</span>
        <Link className="button" to="/incidents/new">Cadastrar Novo Caso </Link>
        <button onClick={handleLogout}  type="button">
        <FiPower size={18} color="#e02041"></FiPower>
        </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
            {incidents.map(incident => (
                <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>Descrição</strong>
                <p>{incident.description}</p>

                <strong>Valor</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(incident.value)}</p>

                <button onClick={() => handleDelete(incident.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
            </li>
            ))}
            
        </ul>

        </div>
        
    )
}