import { Box, Button, FormControl, FormControlLabel, LinearProgress, Radio, RadioGroup, linearProgressClasses } from "@mui/material"
import styled from "styled-components"
import { style } from "../components/RecoveyPassword"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { ExamState } from "../redux/exam.slice";
import { bgcolor } from "@mui/system";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    padding: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#26282B",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#fff',
    },
  }));

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
                <div className="counter">
                    <Box sx={{display: "flex", justifyContent: "space-between", paddingBottom: 1}}>
                        <p style={{fontSize: 20}}>{questionNumber}/65</p>
                        <div className="clock">
                            <AccessAlarmIcon sx={{width: 20}} />
                            <p style={{fontSize: 20, paddingLeft: 10}}>00:00</p>
                        </div>
                    </Box>
                    <BorderLinearProgress variant="determinate" value={questionNumber / 65 * 100} />
                </div>
                <div className="questionBlock">
                    <p className="question">{question.question}</p>
                    <FormControl>
                        <RadioGroup>
                            {question.answers.map((item) =>
                                <FormControlLabel 
                                    value={item} 
                                    control={<Radio />}
                                    sx={{
                                        border: "1px solid #40464D", 
                                        borderRadius: 2, 
                                        marginBottom: 1,
                                        padding: 2
                                    }}
                                    label={<p style={{fontSize: 16, fontWeight: 200}}>{item}</p>}
                                />
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="buttonsBlock">
                    <Button 
                        variant="outlined"  
                        onClick={() => setQuestionNumber(questionNumber - 1)} 
                        sx={ButtonSecondary}
                        disabled={questionNumber === 1}
                    >Voltar</Button>
                    <Button 
                        variant="contained" 
                        onClick={() => setQuestionNumber(questionNumber + 1)} 
                        sx={[style.button, {width: 120, height: 36}]}
                    >Próxima</Button>
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
`

const Body = styled.div` 
    height: 100%;

.counter {
        margin: 0 auto;
        background-color: #303235;
        flex-direction: column;
        width: 290px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: 1px solid #524E4E;
        padding: 16px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;

        .clock {
            display: flex;
            align-items: center;
        }
    }

    .buttonsBlock {
        display: flex;
        justify-content: space-between;
        padding: 32px;
        position: relative;
        bottom: 0;

        p {
            font-size: 28px;
        }
    }

    .questionBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;

        .question {
            padding-bottom: 20px;
        }

        p {
            font-size: 20px;
            margin: 0 auto;
            max-width: 600px;
            
        }
        &:nth-child(1) {
            p {
                padding-bottom: 10px;
            }
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