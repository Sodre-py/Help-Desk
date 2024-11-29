import style from './HeaderTicket.module.css'
import { Link } from "react-router-dom"

export function HeaderTickets() {
    return(
      <>
       <div className={style.caixa}>
        <h2 className={style.titulo}>Meus Tickets</h2>
        <div className={style.links}>
          <Link to={"/ticket"} className={style.Link}>
          <div className={style.rotas}>
            Atendimento
          </div>
          </Link>
          
          <Link to={"/ticket/pausados"} className={style.Link}>
          <div  className={style.rotas}>
            Pausados
          </div>
          </Link>
          
          <Link to={"/ticket/finalizados"} className={style.Link}>
          <div className={style.rotas}>
            Finalizados
          </div>
          </Link>
          


          </div>
        </div>
      </>  
    )
}