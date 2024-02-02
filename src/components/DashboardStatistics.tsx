import styled from "styled-components"
import SelectTypeExam from "./SelectTypeExam"
import StatisticsItem from "./StatisticsItem"

export default function DashboardStatistics(){
    return(
        <>
            <Container>
                <div className="header">
                    <h3>Estatísticas</h3>
                    <SelectTypeExam />
                </div>
                <div className="charts">
                    <StatisticsItem />
                    <StatisticsItem />
                    <StatisticsItem />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    border: 1px solid #524E4E;
    width: 650px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 40px;

    .charts{
        display: flex;
        justify-content: space-around;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
    }
`