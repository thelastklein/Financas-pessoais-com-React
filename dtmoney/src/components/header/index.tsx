import logoimg from '../../assets/money-circle.svg'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoimg} alt="dt money"/>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}