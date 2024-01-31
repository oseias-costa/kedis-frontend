import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { httpClient } from "../utils/httpClient"
import { fecthUser } from "../redux/user.slice"

export default function useLogin(){
    const [login, setLogin] = useState({email: "", password:"", error: "", loading: false})
    const user = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()

    function handleLogin(){
        setLogin({...login, loading: true})
        axios({
            url: "http://localhost:8100/login",
            method: "POST",
            data: { 
                email: login.email, 
                password: login.password
            },
            headers: { 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then((res) => {
            localStorage.setItem("kedisToken", res.data.token)
            setLogin({...login, loading: false})

            httpClient("/user", "GET").then((r) => {
                dispatch(fecthUser(r.data))
            })
            
        }).catch((err) => {
            setLogin({...login, loading: false})
            if(err.response.data === "crypto/bcrypt: hashedPassword is not the hash of the given password"){
                return setLogin({...login, error: "Usuário ou senha não conferem"})
            }
            if(err.response.data === "crypto/bcrypt: hashedSecret too short to be a bcrypted password"){
                return setLogin({...login, error: "Usuário ou senha não conferem"})
            }
            setLogin({...login, error: "Ocorreu um erro"})
        })
    }

    return { login, setLogin, handleLogin }
}