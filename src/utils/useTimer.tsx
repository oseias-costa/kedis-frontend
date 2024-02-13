import { useEffect, useState } from "react"

export function useTimer(){
    const [timer, setTimer] = useState("")
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0) 
    const [hour, setHour] = useState(0)

    useEffect(() => {
        const newSecond = setTimeout(() => {
            if(second === 59){
                setSecond(0)
                setMinute(minute + 1)
            } else {
                setSecond(second + 1)
            }
        
            if(minute === 59){
            setMinute(0)
            setHour(hour + 1)
        }
        setTimer(`${hour}:${formate(minute)}:${formate(second)}`)

    }, 1000)
    return () => {
        clearTimeout(newSecond)
    }
},[second])

    return { timer }
}

function formate(time: number):string {
    if(time < 10){
        return `0${time}`
    }

    return String(time)
}