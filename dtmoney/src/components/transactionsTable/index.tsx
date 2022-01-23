import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$6.000</td>
                        <td>Desenvolvimento</td>
                        <td>22/01/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$600</td>
                        <td>Casa</td>
                        <td>07/01/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$6.000</td>
                        <td>Desenvolvimento</td>
                        <td>22/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}