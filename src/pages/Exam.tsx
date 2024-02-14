import { Box, Button, FormControl, FormControlLabel, Grow, IconButton, Radio, RadioGroup } from "@mui/material"
import styled from "styled-components"
import { style } from "../components/RecoveyPassword"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { ExamState } from "../redux/exam.slice";
import { Close } from "@mui/icons-material";
import ActionModal from "../components/ActionModal";
import { useNavigate } from "react-router";
import { BorderLinearProgress } from "../utils/boderLinearProgress";
import { chosen, chosenReverse, initialQuestionChoiseState } from "../utils/examUtils";
import { useTimer } from "../utils/useTimer";
import { incrementWrongAnswer, newWrongAnswer, resetWrongAnswersState } from "../redux/wrongAnswers.slice";
import { useLocation } from "react-router-dom"
import useExamResult from "../controller/useExamResult";
import LoadExam from "../components/LoadExam"

type QuestionsResolved = {
        id: number, 
        choice: any,
        correction: boolean,
        chosen: string
}

export type WrongAnswers = {
    serviceType: string,
    topic: string,
    wrongAnswers: number,
    total: number
}

export default function Exam(){
    const dispatch = useDispatch()
    const wrongAnswersState = useSelector((state: RootState) => state.wrongAnswers.answers)
    const { timer } = useTimer()
    const [questionNumber, setQuestionNumber] = useState(1)
    const [cancel, setCancel] = useState(false)
    const [question, setQuestion] = useState(ExamState)
    const [questionChoice, setQuestionChoice] = useState<QuestionsResolved>(initialQuestionChoiseState)
    const [grow, setGrow] = useState(false) 
    const examItem = useSelector((state: RootState) => state.exam.exam)
    const navigate = useNavigate()
    const [questionsResolved, setQuestionsResolved] = useState<QuestionsResolved[]>([{
        id: 0, 
        choice: "",
        correction: false,
        chosen: ""    
    }])
    const { state } = useLocation()
    const { mockExam, cloud } = state
    const { handleSaveResult, loading } = useExamResult()

    useEffect(() => {
        setTimeout(() => {
            const find = examItem.filter((item) => item.id === questionNumber)[0]
            setQuestion(find)
            setGrow(true)
        }, 250)
        setGrow(false)
    },[questionNumber])

    const selected = questionsResolved?.filter(item => item.id === question.id)[0]

    return(
        <Container>
            <LoadExam load={loading} />
            <ActionModal open={cancel} setOpen={setCancel} handleCancel={() => {
                navigate("/simulados", {replace: true})
                dispatch(resetWrongAnswersState("reset"))
                }} />
            <IconButton sx={{position: "absolute", right: 32, top: 32}} onClick={() => setCancel(true)}>
                <Close sx={{fill: "#fff"}} />
            </IconButton>
            <Body>
                <div className="counter">
                    <Box sx={{display: "flex", justifyContent: "space-between", paddingBottom: 1}}>
                        <p style={{fontSize: 20}}>{questionNumber}/{examItem.length}</p>
                        <div className="clock">
                            <AccessAlarmIcon sx={{width: 20}} />
                            <p style={{
                                fontSize: 20, 
                                paddingLeft: 10, 
                                width: 80
                            }}>{timer}</p>
                        </div>
                    </Box>
                    <BorderLinearProgress variant="determinate" value={questionNumber / examItem.length * 100} />
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
                                    checked={ selected?.id === question.id 
                                                ? (index + 1 === chosenReverse(selected?.choice) ? true : false)
                                                : undefined
                                    }
                                    onChange={() => 
                                        setQuestionChoice({
                                            id: question.id, 
                                            choice: chosen(index + 1), 
                                            correction: chosen(index + 1) === question.correctAlternative,
                                            chosen: item
                                        })}
                                    sx={{
                                        border: (
                                            selected?.id === question.id 
                                            ? ((question.correctAlternative === chosen(index +1) 
                                                    ? "1px solid #056517" 
                                                    : (index + 1 === chosenReverse(selected?.choice) && chosen(selected?.choice) !== question.correctAlternative) 
                                                        ? "1px solid #bf1029" : "1px solid #40464D")
                                            ) : "1px solid #40464D"), 
                                        borderRadius: 2, 
                                        marginBottom: 1,
                                        padding: 1.5,
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
                { question.id != 0 && selected?.id === question?.id ? (
                    <FeedBack><strong>Resposta:</strong> {question.correctAlternativeFeedback}</FeedBack>
                ): null}
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
                            if(questionsResolved?.find(item => item.id === question.id)){
                                setQuestionNumber(questionNumber + 1)
                            }
                            setQuestionsResolved([...questionsResolved, {
                                id: questionChoice?.id, 
                                choice: questionChoice?.choice, 
                                correction: questionChoice?.correction, 
                                chosen: ""
                            }])

                            
                            if(questionChoice.id !== 0 && question.correctAlternative !== questionChoice.chosen[0]){
                                const wrongAnswer: WrongAnswers = {
                                    serviceType: question.serviceType,
                                    topic: question.topic,
                                    total: 1,
                                    wrongAnswers: 1
                                }
                                if(wrongAnswersState.length === 0){
                                     dispatch(newWrongAnswer(wrongAnswer))
                                     setQuestionChoice(initialQuestionChoiseState)
                                     return console.log(JSON.stringify(wrongAnswersState))
                                } else {
                                    for(let i = 0; i < wrongAnswersState.length; i++){
                                        if(wrongAnswersState[i].serviceType === question.serviceType){
                                            dispatch(incrementWrongAnswer(question.serviceType))
                                            setQuestionChoice(initialQuestionChoiseState)
                                            return console.log(wrongAnswersState)
                                        }
                                    }
                                    
                                    dispatch(newWrongAnswer(wrongAnswer))
                                    setQuestionChoice(initialQuestionChoiseState)
                                    return console.log(wrongAnswersState)
                                }
                                
                            }
                            console.log(JSON.stringify(wrongAnswersState))

                            if(examItem.length === questionNumber){
                                console.log("executar save")
                                handleSaveResult(mockExam, cloud, examItem.length)
                            }
                        }} 
                        sx={[style.button, {width: 150, height: 36}]}

                    >{  selected?.id === question?.id 
                        ? "Próxima" 
                        : examItem.length === questionNumber? "Finalizar" : "Ver Resposta" }
                    </Button>
                </div>
            </Body>
        </Container>
    )
}

const Container = styled.section`
    position: absolute;
    background-color: #181B1E;
    z-index: 200;
    width: 100%;
    min-height: 100vh;
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

const FeedBack = styled.p`
    max-width: 600px;
    margin: 0 auto;
    padding-top: 15px;
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