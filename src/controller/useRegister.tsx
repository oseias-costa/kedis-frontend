import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { baseUrl, httpClient } from "../utils/httpClient"
import { fecthUser } from "../redux/user.slice"

export default function useRegister(){
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "", 
        password:"", 
        error: "", 
        errorType: "",
        loading: false
    })
    const dispatch = useDispatch()

    function handleRegister(){
        setRegister({...register, loading: true})
        axios({
            url: `${baseUrl}/user`,
            method: "POST",
            data: { 
                firstName: register.firstName,
                lastName: register.lastName,
                email: register.email, 
                password: register.password
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then((res) => {
            localStorage.setItem("kedisToken", res.data.token)
            setRegister({...register, loading: false})

            httpClient("/user", "GET").then((r) => {
                dispatch(fecthUser(r.data))
            })
            
        }).catch((err) => {
            setRegister({...register, loading: false})
            if(err.response.data === "Name is required"){
                return setRegister({...register, error: "O Nome é obrigatório", errorType: "firstName"})
            }

            if(err.response.data === "LastName is required"){
                return setRegister({...register, error: "O sobrenome é obrigatório", errorType: "lastName"})
            }
            
            if(err.response.data === "Email is required"){
                return setRegister({...register, error: "O email é obrigatório", errorType: "email"})
            }

            if(err.response.data === "Email is not valid"){
                return setRegister({...register, error: "O email não é válido", errorType: "email"})
            }

            if(err.response.data === "Password is required"){
                return setRegister({...register, error: "A senha é obrigatória", errorType: "password"})
            }

            setRegister({...register, error: "Ocorreu um erro"})
        })
    }

    return { register, setRegister, handleRegister }
}