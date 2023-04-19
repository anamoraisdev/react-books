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
            {listaPedidos && listaPedidos.map((pedido) => 
                <div className="pedido" key={pedido.id}>
                 <ul>
                    <li>pedido:<strong>{pedido.id}</strong></li>
                    <li>data do pedido:<strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                    <li>valor total:<strong>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</strong></li>
                    <li>entrega realizada em:<strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                 </ul>
                 <AbBotao texto="Detalhes"/>
                </div>
            )}
        </section>
    )
}

export default PedidosUsuario;