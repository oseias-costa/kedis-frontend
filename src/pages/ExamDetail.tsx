import { Button } from "@mui/material"
import { Navigate, useLocation } from "react-router-dom"
import styled from "styled-components"
import { style } from "../components/RecoveyPassword"
import useExam from "../controller/useExam"
import LoadExam from "../components/LoadExam"

export default function ExamDetail(){
    const location = useLocation()
    const path = location.pathname.split("/")[3]
    const { handleFechExam, examDetail } = useExam(path)

    if (!location.state?.name){
        return <Navigate to="/simulados" />
    }

    return(
        <Container>
            <LoadExam load={examDetail} />
            <h1>Detalhes</h1>
            <div className="box">
                <h2>{location.state?.name}</h2>
                <p className="description">{location.state.description}</p>
                <p className="obs">O simulado terá um relógio para efeito de contagem do tempo. O simulado não irá finalizar após o tempo terminar.</p>
                <Button 
                    variant="contained" 
                    onClick={handleFechExam} 
                    sx={style.button}
                >Iniciar Simulado</Button>
            </div>
        </Container>
    )
}

const Container = styled.section`

    .box {
        text-align: center;
        width: 626px;
        border: 1px solid #524E4E;
        border-radius: 10px;
        padding: 32px;
        margin-top: 26px;

        .description{
            max-width: 400px;
            margin: 0 auto;
        }

        .obs {
            font-weight: 100;
            padding-top: 20px;
            padding-bottom: 40px;
            max-width: 450px;
            margin: 0 auto;
            color: #959595;
        }
    }
`