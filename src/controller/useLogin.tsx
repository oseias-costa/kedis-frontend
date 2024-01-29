import axios from "axios"
import { useState } from "react"

export default function useLogin(){
    const [login, setLogin] = useState({email: "", password:"", error: ""})

    function handleLogin(){
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
        }).then((res) => console.log(res)).catch((err) => {
            if(err.response.data === "crypto/bcrypt: hashedPassword is not the hash of the given password"){
                setLogin({...login, error: "Usuário ou senha não conferem"})
            }
            if(err.response.data === "crypto/bcrypt: hashedSecret too short to be a bcrypted password"){
                setLogin({...login, error: "Usuário ou senha não conferem"})
            }
            console.log(err)

        })
    }

    return {login, setLogin, handleLogin }
}