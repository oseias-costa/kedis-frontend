import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../styles/Login";
import Logo from "/logo-kedis.svg"
import { Button, TextField } from "@mui/material";
import ModalFull from "./ModalFull";
import { useState } from "react";
import RecoveryPassword from "./RecoveyPassword";

export default function VerifyCode(){
    const location = useLocation()
    const email = location.pathname.split("/")[2]
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    

    const handleSend = () => {
        return setOpen(true)
    }

    return(
        <section style={style.container}>
            <ModalFull open={open} setOpen={setOpen}>
                <RecoveryPassword />
            </ModalFull>
            <S.Img src={Logo} alt="Logo Kedis" />
            <h2 style={{textAlign: "left"}}>Verificar código</h2>
            <p style={style.text}>Digite abaixo o código de 4 dígitos enviado para o email: <strong>{email}</strong>.</p>
            <TextField 
                label="Código"
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <Button 
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleSend}
            >Verificar código</Button>
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
        width: "350px"
    }
}