import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import ModalLoginUsuario from "../ModalLoginUsuario"

const BarraNavegacao = () => {
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);
    const token = sessionStorage.getItem('token')
    const [userLogado, setUserLogado] = useState<boolean>(token!= null);
 
    const aoFazerLogin =  () => {
        setModalLoginAberta(false)
        setUserLogado(true)
    }

    return (
    <nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    
        <ul className="acoes">
            {! userLogado && 
                <>
                    <li>
                        <BotaoNavegacao 
                            texto="Login" 
                            textoAltSrc="Icone representando um usuário" 
                            imagemSrc={usuario}
                            onClick={() => setModalLoginAberta(true)}
                        />
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Cadastrar-se"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setModalCadastroAberta(true)}
                        />
                    </li>
                </>
            }
            {userLogado && 
                <>
                    <li>
                        <Link to="/minhaconta">minha conta</Link>
                    </li>
                </>
            }
        </ul>
        <ModalCadastroUsuario 
            aberta={modalCadastroAberta} 
            aoFechar={() => setModalCadastroAberta(false)}
        />

        <ModalLoginUsuario 
            aberta={modalLoginAberta} 
            aoFechar={() => setModalLoginAberta(false)}
            aoFazerLogin={aoFazerLogin}
        />
    </nav>)
}

export default BarraNavegacao