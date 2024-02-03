import { Box, Button, FormControl, FormControlLabel, Grow, IconButton, LinearProgress, Radio, RadioGroup, linearProgressClasses } from "@mui/material"
import styled from "styled-components"
import { style } from "../components/RecoveyPassword"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { ExamState } from "../redux/exam.slice";
import { Close } from "@mui/icons-material";
import ActionModal from "../components/ActionModal";
import { useNavigate } from "react-router";

const BorderLinearProgress = styled(LinearProgress)(() => ({
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

type QuestionsResolved = {
        id: number, 
        choice: any,
        correction: boolean    
}

function chosen(num: number): string {
    if(num === 1) {
        return "A"
    }
    if(num === 2) {
        return "B"
    }
    if(num === 3) {
        return "C"
    }
    if(num === 4) {
        return "D"
    }
    return ""
}

export default function Exam(){
    const [questionNumber, setQuestionNumber] = useState(1)
    const [cancel, setCancel] = useState(false)
    const [question, setQuestion] = useState(ExamState)
    const [questionChoice, setQuestionChoice] = useState<QuestionsResolved>()
    const [grow, setGrow] = useState(false) 
    const examItem = useSelector((state: RootState) => state.exam.exam)
    const navigate = useNavigate()
    const [questionsResolved, setQuestionsResolved] = useState<QuestionsResolved[]>()

    console.log(questionChoice)
    useEffect(() => {
        setTimeout(() => {
            const find = examItem.filter((item) => item.id === questionNumber)[0]
            setQuestion(find)
            setGrow(true)
        }, 250)
        setGrow(false)
    },[questionNumber])

    return(
        <Container>
            <ActionModal open={cancel} setOpen={setCancel} handleCancel={() => navigate("/simulados", {replace: true})} />
            <IconButton sx={{position: "absolute", right: 32, top: 32}} onClick={() => setCancel(true)}>
                <Close sx={{fill: "#fff"}} />
            </IconButton>
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
                <Grow in={grow}>
                <div className="questionBlock">
                    <p className="question">{question.question}</p>
                    <FormControl>
                        <RadioGroup>
                            {question.answers.map((item, index) =>
                                <FormControlLabel 
                                    value={item} 
                                    control={<Radio />}
                                    onChange={() => 
                                        setQuestionChoice({
                                        id: question.id, choice: chosen(index + 1), correction: false})}
                                    sx={{
                                        border: "1px solid #40464D", 
                                        borderRadius: 2, 
                                        marginBottom: 1,
                                        padding: 2,
                                        transition: ".2s linear",
                                        ":hover": {
                                            border: "1px solid #fff",
                                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                                        }
                                    }}
                                    label={<p style={{fontSize: 16, fontWeight: 200}}>{item}</p>}
                                />
                            )}
                        </RadioGroup>
                    </FormControl>
                </div>
                </Grow>
                <div className="buttonsBlock">
                    <Button 
                        variant="outlined"  
                        onClick={() => setQuestionNumber(questionNumber - 1)} 
                        sx={ButtonSecondary}
                        disabled={questionNumber === 1}
                    >Voltar</Button>
                    <Button 
                        variant="contained" 
                        onClick={() => {
                            setGrow(true)
                            setQuestionNumber(questionNumber + 1)
                        }} 
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
        position: relative;
        bottom: 1px;
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