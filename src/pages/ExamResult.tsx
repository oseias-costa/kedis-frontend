import { useLocation } from "react-router-dom"
import styled from "styled-components"
import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";

export default function ExamResult(){
    const location = useLocation()
    const { state } = location.state

    useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      
        return () => confetti.clear();
      }, [])

    return(
        <Container>
            <canvas id="my-canvas"></canvas>
            <h1>Resultado</h1>
            <p>Pontos</p>

        </Container>
    )
}

const Container = styled.div`
    
`