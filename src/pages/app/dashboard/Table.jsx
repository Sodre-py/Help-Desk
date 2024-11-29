import style from './Table.module.css'

export function Table() {
    return (
        <div className={style.tabela}>
            <table className={style.table}>
                <thead>
                        <tr className={style.alinhamento}>
                            <th>ID</th>
                            <th>TÍTULO</th>
                            <th className={style.status}>STATUS</th>
                            <th>OPERADOR DE MESA</th>
                            <th>CRIADO</th>
                            <th>TEMPO PARA ATENDIMENTO/SOLUCÃO(SLA)</th>
                        </tr>
                </thead> 
                <tbody> 
                        <tr className={style.line1}>
                            <td className={style.id}>#9856</td>
                            <td>Falha no servidor</td>
                            <div className={style.concluido}>
                            <td className={style.status}>Concluido</td>
                            </div>
                            <td>Fabrício</td>
                            <td>há 3 horas</td>
                            <div className={style.timer}>
                            <td></td>
                            </div>
                        </tr>
                        <tr className={style.line}>
                            <td className={style.id}>#9856</td>
                            <td>Falha no servidor</td>
                            <div className={style.pendente}>
                            <td className={style.status}>Pendente</td>
                            </div>
                            <td>Fabrício</td>
                            <td>há 3 horas</td>
                            <div className={style.timer}>
                            <td></td>
                            </div>
                        </tr>
                        <tr className={style.line1}>
                            <td className={style.id}>#9856</td>
                            <td>Falha no servidor</td>
                            <div className={style.expirado}>
                            <td className={style.status}>Expirado</td>
                            </div>
                            <td>Fabrício</td>
                            <td>há 3 horas</td>
                            <div className={style.timer}>
                            <td></td>
                            </div>
                        </tr>
                        <tr className={style.line}>
                            <td className={style.id}>#9856</td>
                            <td>Falha no servidor</td>
                            <div className={style.atendendo}>
                            <td className={style.status}>Atendendo</td>
                            </div>
                            <td>Fabrício</td>
                            <td>há 3 horas</td>
                            <div className={style.timer}>
                            <td></td>
                            </div>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}