import { Link, Outlet } from "react-router-dom";


const PaginaBaseLogado = () => {
    return(
        <>
            <h1>Minha conta</h1>
            <section>
                <div>
                    <ul>
                        <li><Link to='/minhaconta/pedidos'>Pedidos</Link></li>
                        <li><Link to='/minhaconta/trocas'>Trocas</Link></li>
                        <li><Link to='/minhaconta/cupons'>Cupons</Link></li>
                        <li><Link to='/minhaconta/dados'>Seus dados</Link></li>
                    </ul>
                </div>
                <div>
                    <Outlet/>
                </div>
            </section>
        </>
    )
}
export default PaginaBaseLogado;