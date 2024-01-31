import { useLocation } from "react-router-dom";
import * as S from "../styles/Login";
import Logo from "/logo-kedis.svg"
import { Button, CircularProgress, TextField } from "@mui/material";
import ModalFull from "./ModalFull";
import RecoveryPassword from "./RecoveyPassword";
import useVerifyCode from "../controller/useVerifyCode";

export default function VerifyCode(){
    const location = useLocation()
    const email = location.pathname.split("/")[2]
    const {state, setState, handleSendCode, open, setOpen} = useVerifyCode(email)
  
    return(
        <section style={style.container}>
            <ModalFull open={open} setOpen={setOpen}>
                <RecoveryPassword email={email} />
            </ModalFull>
            <S.Img src={Logo} alt="Logo Kedis" />
            <h2 style={{textAlign: "left"}}>Verificar código</h2>
            <p style={style.text}>Digite abaixo o código de 4 dígitos enviado para o email: <strong>{email}</strong>.</p>
            <TextField 
                label="Código"
                style={style.textField} 
                error={state.error !== ""}
                helperText={state.error}
                variant="filled" 
                size="small"
                onChange={(e) => setState({...state, error: "", code: Number(e.target.value)})}
                sx={{input: {color: "#fff"}}}
            />
            <Button 
                variant="contained" 
                disabled={state.loading}
                sx={style.button} 
                size="small"
                onClick={handleSendCode}
                >{state.loading ? <CircularProgress  style={{width: 20, height: 20}} /> : "Verificar código"}</Button>
        </section>
    )
}

const style = {
    container: {
        width: 350,
        height: 425.5
    },
    textField: {
        color: "#524E4E",
        width: "350px",
        marginTop: "10px",
        fontFamily: "var(--font-secondary)"
    },
    text: {
        fontFamily: "var(--font-secondary)",
        fontSize: "18px",
        fontWeight: 200,
        textAlign: "left" as const
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
    }
}