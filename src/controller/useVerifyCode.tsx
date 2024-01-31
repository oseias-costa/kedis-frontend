import axios from "axios"
import { useState } from "react"

export default function useVerifyCode(email: string){
    const [open, setOpen] = useState(false)
    const [state, setState] = useState({
        email: email, 
        code: 0, 
        error: "", 
        loading: false
    })

    function handleSendCode(){
        setState({...state, loading: true})
        axios({
            url: "http://localhost:8100/verifycode",
            method: "POST",
            data: { 
                email: state.email,
                code: state.code 
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then((res) =>  {
            setState({...state, loading: false})
            setOpen(true)
            console.log(res)
        }).catch((err) => {
            if(err.response.data.error === "code dont match"){
                return setState({...state, error: "O código não confere"})
            } 
            
            if(state.email === ""){
                return setState({...state, error: "Digite o código"})
            } 

            setState({...state, error: "Ocorreu um erro, tente novamente mais tarde"})        
            setState({...state, loading: false})
        })
    }

    return {state, setState, handleSendCode, open, setOpen}
}