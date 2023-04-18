import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import imagemPrincipal from "../ModalCadastroUsuario/assets/login.png"
import './modalLogin.css';
import axios from "axios";

interface PropsModalLogin {
    aberta: boolean
    aoFechar: () => void
    aoFazerLogin: () => void
}

const ModalLoginUsuario = ({aberta, aoFechar, aoFazerLogin} : PropsModalLogin) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento?.preventDefault()
        const dadosLogin = {email,senha}
        
        axios.post('http://localhost:8000/public/login', dadosLogin)
        .then((resposta) => {
            sessionStorage.setItem('token', resposta.data.access_token)
            if(resposta?.data?.access_token){
            }
            aoFazerLogin()
            setSenha('')
            setEmail('')
            aoFechar()
        })
        .catch((erro) => {
            if(erro?.response?.data?.messege){
                console.log(erro.response.data.messege)
            }else{
                alert('Aconteceu um erro inesperado ao efetuar o seu login, entre em contato com o nosso suporte!')
            }
        })
    }
 
    return(
        <AbModal
            titulo="Login"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <section className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal}/>
                </figure>

                <form onSubmit={submeterForm}>
                    <AbCampoTexto
                        label="email"
                        value={email}
                        onChange={setEmail}
                        type="email"
                        placeholder="seuemail@gmail.com"
                    ></AbCampoTexto>

                    <AbCampoTexto
                        label="senha"
                        value={senha}
                        onChange={setSenha}
                        placeholder="sua senha"
                        type="password"
                    ></AbCampoTexto>
                    <div className="item">
                        <a href="#">esqueceu sua senha?</a>
                        <AbBotao texto="Fazer Login"></AbBotao>
                    </div>
                    <footer className="item">
                        <p>Ainda não tem uma conta?</p>
                        <AbBotao texto="criar conta"></AbBotao>
                    </footer>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalLoginUsuario;