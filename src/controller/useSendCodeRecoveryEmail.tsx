import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function useSendCodeRecoveryEmail(){
    const [state, setState] = useState({email: "", error: "", loading: false})
    const navigate = useNavigate()

    function handleSendCode(){
        setState({...state, loading: true})
        axios({
            url: "http://localhost:8100/sendcode",
            method: "POST",
            data: { email: state.email },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then(() =>  {
            navigate("/validar-codigo/oseiasc2@gmail.com")
            setState({...state, loading: false})
        }).catch((err) => {
            if(err.response.data.error === "Email is invalid"){
                return setState({...state, error: "O email não é válido"})
            } 
            
            if(state.email === ""){
                return setState({...state, error: "Digite um email"})
            } 
            setState({...state, error: "Ocorreu um erro, tente novamente mais tarde"})        
            setState({...state, loading: false})
        })
    }

    return {state, setState, handleSendCode}
}