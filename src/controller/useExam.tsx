import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchExam } from "../redux/exam.slice"

export default function useExam(name: string){
    const token = localStorage.getItem("kedisToken")
    const [examDetail, setExamDetail] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFechExam = () => {
        setTimeout(() => {
            console.log("123")
        }, 4000)
        setExamDetail(true)
        axios({
            url: "http://localhost:8100/exam",
            method: "POST",
            data: { 
                examName: name
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Authorization": `${token}`
            }
        }).then((res) => {
            dispatch(fetchExam(res.data))
            setExamDetail(false)
            return navigate(`/simulados/exame/${name}/1`)
        }).catch(() => setExamDetail(false))
    }

    return { handleFechExam, examDetail}
}