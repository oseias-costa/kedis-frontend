import styled from "styled-components"
import ChartStatistics from "./ChartStatistics"

export default function StatisticsItem(){
    return (
        <Container>
            <TableStatistics>
                <thead>
                    <th></th>
                    <th className="service">Serviços</th>
                    <th className="qtde">Erradas</th>
                </thead>
                <tbody> 
                    <tr>
                        <td className="num">1</td>
                        <td>Armazenamento</td>
                        <td className="qtde">3</td>
                    </tr>
                    <tr>
                        <td className="num">2</td>
                        <td>Computação</td>
                        <td className="qtde">2</td>
                    </tr>
                    <tr>
                        <td className="num">3</td>
                        <td>Segurança</td>
                        <td className="qtde">4</td>
                    </tr>
                </tbody>
            </TableStatistics>
            <div className="chart">
                <ChartStatistics data={data} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 200px;

    .chart {
        width: 200px;
        height: 150px;
    }
`

const TableStatistics = styled.table`
    width: 200px;
    font-family: var(--font-secondary);
    font-weight: 200;
    font-size: 14px;

    thead {
        border: 1px solid #524E4E;
    }

    .qtde {
        text-align: right;
        font-weight: 400;
    }

    .num {
        padding-right: 5px;
    }

    .service {
        text-align: left;
        font-weight: 400;
    }
`

const data = [
    {
      "country": "1",
      "hot dog": 3,
    },
    {
      "country": "2",
      "hot dog": 2,
      
    },
    {
      "country": "3",
      "hot dog": 4,
    }
  ]