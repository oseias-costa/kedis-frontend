import { Button, TextField } from "@mui/material";
import * as S from "../styles/Login";
import useLogin from "../controller/useLogin";
import ModalFull from "../components/ModalFull";
import { useState } from "react";
import SendCodeRecoveryEmail from "../components/SendCodeRecoveryEmail";

export default function Register(){
    const { login, setLogin, handleLogin } = useLogin()
    const [open, setOpen] = useState(false)

    return(
        <S.LoginContainer>
            <ModalFull open={open} setOpen={setOpen}>
                <SendCodeRecoveryEmail />
            </ModalFull>
            <TextField 
                label="Nome" 
                error={login.error != ""}
                helperText={login.error !== "" ? login.error : null}
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setLogin({
                    ...login, 
                    email: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Sobrenome" 
                error={login.error != ""}
                helperText={login.error !== "" ? login.error : null}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setLogin({
                    ...login, 
                    password: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Email" 
                error={login.error != ""}
                helperText={login.error !== "" ? login.error : null}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setLogin({
                    ...login, 
                    password: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Senha" 
                error={login.error != ""}
                helperText={login.error !== "" ? login.error : null}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color  : "#fff"}}}
                onChange={(e) => setLogin({
                    ...login, 
                    password: e.target.value, 
                    error: ""})
                } 
            />
            <Button 
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleLogin}
            >Registar</Button>
        </S.LoginContainer>
    )
}

const style = {
    textField: {
        color: "#524E4E",
        width: "350px",
        marginTop: "10px",
        fontFamily: "var(--font-secondary)",
    },
    button: {
        fontFamily: "var(--font-secondary)",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: 400,
        backgroundColor: "#F2F2F0",
        marginTop: "10px",
        width: "350px"
    },
    forgetPassword: {
        fontFamily: "var(--font-secondary)",
        fontSize: "16px",
        fontWeight: "200",
        height: "20px",
        alignSelf: "left",
        cursor: "pointer",
        paddingTop: 10,
        marginTop: 10,
        color: "#fff",
        ":hover": {
            color: "red",
            backgroundColor: "red"
        },
        "@media(max-width: 800px)": {
            paddingLeft: "24px",
        }
    }
}
