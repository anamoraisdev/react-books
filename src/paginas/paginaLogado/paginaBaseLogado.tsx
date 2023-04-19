import { Link, Outlet } from "react-router-dom";
import './styles/paginaBaseLogado.css'

const PaginaBaseLogado = () => {
    return(
        <>
            <h1 className="tituloMinhaConta">Minha conta</h1>
            <section className="sectionMinhaConta">
                <ul className="listaMinhaConta">
                    <Link className="item-minhaconta" to='/minhaconta/pedidos'>Pedidos</Link>
                    <hr/>
                    <Link className="item-minhaconta"to='/minhaconta/trocas'>Trocas</Link>
                    <hr/>
                    <Link className="item-minhaconta"to='/minhaconta/cupons'>Cupons</Link>
                    <hr/>
                    <Link className="item-minhaconta"to='/minhaconta/dados'>Seus dados</Link>
                </ul>
                <div>
                    <Outlet/>
                </div>
            </section>
        </>
    )
}
export default PaginaBaseLogado;