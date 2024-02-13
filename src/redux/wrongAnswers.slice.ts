import { createSlice } from "@reduxjs/toolkit";
import { WrongAnswers } from "../pages/Exam";

interface WrongAnswersState {
    answers: WrongAnswers[]
}

const initialWrongAnswersState: WrongAnswersState = {
    answers: []
}

const wrongAnswersSilice = createSlice({
    initialState: initialWrongAnswersState,
    name: "wrongAnswers",
    reducers: {
        newWrongAnswer: (state, action) => {
            state.answers.push(action.payload)
        },
        incrementWrongAnswer: (state, action) => {
            state.answers = state.answers.map((item) => {
                if(item.serviceType === action.payload){
                    item.total += 1
                    item.wrongAnswers += 1
                }
                return item
            })
        },
        resetWrongAnswersState: (state, payload) => {
            state.answers = []
        }
    }
})

export const {newWrongAnswer, incrementWrongAnswer, resetWrongAnswersState} = wrongAnswersSilice.actions
export default wrongAnswersSilice.reducer