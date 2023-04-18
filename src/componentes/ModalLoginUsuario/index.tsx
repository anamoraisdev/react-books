import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import { Link } from "react-router-dom"
import imagemPrincipal from "../ModalCadastroUsuario/assets/login.png"
import './modalLogin.css';

interface PropsModalLogin {
    aberta: boolean
    aoFechar: () => void
}

const ModalLoginUsuario = ({aberta, aoFechar} : PropsModalLogin) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento?.preventDefault()

        const dadosLogin = {
            email,
            senha
        }
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
                        label="email cadastrado"
                        value={email}
                        onChange={setEmail}
                    ></AbCampoTexto>

                    <AbCampoTexto
                        label="senha"
                        value={senha}
                        onChange={setSenha}
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