import { Button, CircularProgress, TextField } from "@mui/material";
import * as S from "../styles/Login";
import ModalFull from "../components/ModalFull";
import { useState } from "react";
import SendCodeRecoveryEmail from "../components/SendCodeRecoveryEmail";
import useLogin from "../controller/useLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Login(){
    const { login, setLogin, handleLogin } = useLogin()
    const user = useSelector((state: RootState) => state.user.user)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    if (user.id) {
        return navigate("/", { replace: true })
    }

    return(
        <S.LoginContainer>
            <ModalFull open={open} setOpen={setOpen}>
                <SendCodeRecoveryEmail />
            </ModalFull>
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
                    email: e.target.value, 
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
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setLogin({
                    ...login, 
                    password: e.target.value, 
                    error: ""})
                } 
            />
            <Button 
                disabled={login.loading}
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleLogin}
                >{login.loading ? <CircularProgress  style={{width: 20, height: 20}} /> : "Entrar"}</Button>
            <a 
                style={style.forgetPassword}
                onClick={() => setOpen(true)}
            >Esqueci a senha</a>
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
        width: "350px",
        height: 40
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
        "@media(maxWidth: 800px)": {
            paddingLeft: "24px",
        }
    }
}
