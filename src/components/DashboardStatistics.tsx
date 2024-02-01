import styled from "styled-components"
import SelectTypeExam from "./SelectTypeExam"
import StatisticsItem from "./StatisticsItem"

export default function DashboardStatistics(){
    return(
        <>
            <Container>
            <h3>Estatísticas</h3>
                <SelectTypeExam />
                <StatisticsItem />
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
`