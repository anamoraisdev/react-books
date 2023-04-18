import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import PaginaBaseLogado from "../paginas/paginaLogado/paginaBaseLogado"
import PedidosUsuario from "../paginas/paginaLogado/pedidos"


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/minhaconta" element={<PaginaBaseLogado/>}>
          <Route path="pedidos" element={<PedidosUsuario/>}></Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Rotas