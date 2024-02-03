import { Button } from "@mui/material"
import styled from "styled-components"
import { style } from "../components/RecoveyPassword"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { ExamState } from "../redux/exam.slice";

export default function Exam(){
    const [questionNumber, setQuestionNumber] = useState(1)
    const [question, setQuestion] = useState(ExamState)
    const path = location.pathname.split("/")[4]
    const examItem = useSelector((state: RootState) => state.exam.exam)
    console.log(question)

    useEffect(() => {
        const find = examItem.filter((item) => item.id === questionNumber)[0]
        setQuestion(find)
    },[questionNumber])

    return(
        <Container>
            <Body>
                <div className="secondaryBlock">
                    <p>{path}/65</p>
                    <Button variant="outlined" sx={ButtonSecondary}>Voltar</Button>
                </div>
                <div className="questionBlock">
                    <p>{question.answers}</p>
                </div>
                <div className="secondaryBlock">
                    <div><AccessAlarmIcon /></div>
                    <Button variant="contained" onClick={() => setQuestionNumber(questionNumber + 1)} sx={ButtonSecondary}>Voltar</Button>
                </div>
            </Body>
        </Container>
    )
}

const Container = styled.section`
    position: fixed;
    background-color: #181B1E;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 50px;  
`

const Body = styled.div`
    display: flex;
    // justify-content: space-between;  
   

    .secondaryBlock {
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 28px;
        }
    }

    .questionBlock {
        p {
            font-size: 20px;
            margin: 0 auto;
            max-width: 600px;
        }
    }
`

const ButtonSecondary = {
        fontFamily: "var(--font-secondary)",
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: 400,
        backgroundColor: "transparent",
        marginTop: "10px",
        width: "120px",
        height: 36
}