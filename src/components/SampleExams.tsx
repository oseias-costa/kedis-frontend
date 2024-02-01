import styled from "styled-components"
import Card from "./Card"

export default function SampleExams(){

    return(
        <Container>
            <h3>Simulados</h3>
            <div className="SampleBlock">
                <Card 
                    cloud="Aws" 
                    name="Simulado #1 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="/"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #2 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="/"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #3 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="/"
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 40px;

    .SampleBlock {
        padding-top: 20px;
        
        div:nth-child(1){
            margin-right: 20px;
        }
        div:nth-child(2){
            margin-right: 20px;
        }
        
    }

    div {
        display: flex;
    }
`