import arrowupimg from '../../assets/arrow-up.svg'
import arrowdownimg from '../../assets/arrow-down.svg'
import moneyimg from '../../assets/money.svg'

import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';



export function Summary(){
    const {transactions} = useTransactions()
    
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={arrowdownimg} alt="Entradas"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={arrowupimg} alt="Saidas"/>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(summary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={moneyimg} alt="Saldo"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(summary.total)}</strong>
            </div>
        </Container>
    )
}