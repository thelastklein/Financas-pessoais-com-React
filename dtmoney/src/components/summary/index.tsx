import arrowupimg from '../../assets/arrow-up.svg'
import arrowdownimg from '../../assets/arrow-down.svg'
import moneyimg from '../../assets/money.svg'

import { Container } from "./styles";


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={arrowdownimg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={arrowupimg} alt="Saidas"/>
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={moneyimg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}