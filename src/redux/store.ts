import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import examSlice from "./exam.slice"
import wrongAnswersSlice from "./wrongAnswers.slice"

export const store = configureStore({
    reducer: {
        user: userSlice,
        exam: examSlice,
        wrongAnswers: wrongAnswersSlice
    }})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;