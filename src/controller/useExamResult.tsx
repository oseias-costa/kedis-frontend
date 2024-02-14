import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function useExamResult(){
    const token = localStorage.getItem("kedisToken")
    const user = useSelector((state: RootState) => state.user.user)
    const wrongAnswers = useSelector((state: RootState) => state.wrongAnswers.answers)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    
    function handleSaveResult(mockExam: string, cloud: string, questions: number){
        let totalWrong: number = 0
        setLoading(true)
        for(let i = 0; i < wrongAnswers.length; i++){
            console.log("for wrong", wrongAnswers[i].total)
            totalWrong += wrongAnswers[i].total
        }

        console.log(`
            questions ${questions}
        `)
        axios({
            url: "http://localhost:8100/result",
            method: "POST",
            data: { 
                userId: user.id,
                result:  (((questions - totalWrong) / questions) * 100).toFixed(2)  
                ,
                wrong: totalWrong,
                correct: questions - totalWrong,
                mockExam: mockExam,
                cloud: cloud,
                details: wrongAnswers
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Authorization": `${token}`
            }
        }).then((res) => {
            console.log("salvou o resultado", res.data)
            setLoading(false)
            navigate("/")
        }).catch((res) => {
            console.log("erro resultado", res.data)
            setLoading(false)
            navigate("/")
        })
    }

    return { handleSaveResult, loading }
}