import style from './Dashboard.module.css'
import { Table } from './Table'

export function Dashboard() {
    return(
        <>
        <div className={style.header}>
            <div
            className={style.title}>
                <h1 className={style.dashboard}>Dashboard</h1>
            </div>
            <div className={style.cards}>
                <div className= {style.aFazer}>
                    <header className={style.headerCards}>
                        <h1 className={style.titleafazer}>A FAZER</h1>

                    </header>
                    <div className={style.ticket1}>
                        <p className={style.requisicoes}>Requisições das últimas 30 dias</p>
                        <p className={style.numberChamados}>Números da Chamadas: 7 </p>
                    </div>
                </div>
                <div className= {style.atendendo}>
                    <header className={style.headerCards}>
                        <h1 className={style.titleafazer}>Atendendo</h1>

                    </header>
                    <div className={style.ticket1}>
                        <p className={style.requisicoes}>Requisições das últimas 30 dias</p>
                        <p className={style.numberChamados}>Números da Chamadas: 7 </p>
                    </div>
                </div>
                <div className= {style.pausados}>
                    <header className={style.headerCards}>
                        <h1 className={style.titleafazer}>Pausados</h1>

                    </header>
                    <div className={style.ticket1}>
                        <p className={style.requisicoes}>Requisições das últimas 30 dias</p>
                        <p className={style.numberChamados}>Números da Chamadas: 7 </p>
                    </div>
                </div>
                <div className= {style.expirados}>
                    <header className={style.headerCards}>
                        <h1 className={style.titleafazer}>Expirados</h1>

                    </header>
                    <div className={style.ticket1}>
                        <p className={style.requisicoes}>Requisições das últimas 30 dias</p>
                        <p className={style.numberChamados}>Números da Chamadas: 7 </p>
                    </div>
                </div>
            </div>
        </div>
        <Table/>
        </>
         
    )
}