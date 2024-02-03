import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExamStateInterface {
    exam: Exam[]
}

type Exam = {
        "id": number,
        "serviceType": string,
        "topic": string,
        "question": string,
        "answers": string[],
        "correctAlternative": string,
        "correctAlternativeFeedback": string
}

export const ExamState: Exam = {
        "id": 0,
        "serviceType": "",
        "topic": "",
        "question": "",
        "answers": [""],
        "correctAlternative": "",
        "correctAlternativeFeedback": ""
}

export const initialExamState: ExamStateInterface = {
    exam: []
}

const examSlice = createSlice({
    initialState: initialExamState,
    name: "exam",
    reducers: {
        fetchExam: (state, action: PayloadAction<Exam[]>) => {
            state.exam = action.payload
        }
    }
})

export const { fetchExam } = examSlice.actions
export default examSlice.reducer