import styled from "styled-components"
import Card from "../components/Card"

export default function Exams(){
    return(
        <Container>
            <h1>Simulados</h1>
            <h3>Cloud Praticioner</h3>
            <div className="cards">
                <Card 
                    cloud="Aws" 
                    name="Simulado Cloud Pratictioner #1"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#1"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #2 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#2"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #3 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#3"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #1 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#4"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #2 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#5"
                />
                <Card 
                    cloud="Aws" 
                    name="Simulado #3 Cloud Pratictioner"
                    description="65 Questões de múltipla escolha com o tempo de 120 minutos de tempo de prova."
                    path="cloud-practictioner#6"
                />
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 670px;

    h3 {
        padding-top: 30px;
        padding-bottom: 15px;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`