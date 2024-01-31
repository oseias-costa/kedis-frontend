import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function useRecoveryPassword(email: string){
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: email, 
        password: "",
        verifyPassword: "", 
        error: "", 
        loading: false
    })

    function handleChangePassword(){
        setState({...state, loading: true})

        if(state.password !== state.verifyPassword){
            return setState({
                ...state, 
                error: "As senhas não conferem",
                loading: false
            })
        }
        axios({
            url: "http://localhost:8100/updatepassword",
            method: "POST",
            data: { 
                email: state.email,
                password: state.password
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then(() =>  {
            setState({...state, loading: false})
            return navigate("/login")

        }).catch(() => {
            setState({...state, error: "Ocorreu um erro, tente novamente mais tarde"})        
            setState({...state, loading: false})
        })
    }

    return {state, setState, handleChangePassword}
}