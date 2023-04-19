import { AbBotao } from "ds-alurabooks";
import './styles/pedidos.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { IPedido } from "../../interfaces/IPedido";

const PedidosUsuario = () => {
    const [listaPedidos, setListaPedidos] =useState<IPedido[]>([])

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        axios.get<IPedido[]>('http://localhost:8000/pedidos', {
            headers: {'Authorization' : `Bearer ${token}`}
        })
        .then(resposta => setListaPedidos(resposta.data))
        .catch(erro =>console.log(erro))
    },[])

    return(
        <section className="pedidos">
            <h1>Meus pedidos</h1>
            
        </section>
    )
}

export default PedidosUsuario;