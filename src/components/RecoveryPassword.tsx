import { useLocation } from "react-router-dom";
import * as S from "../styles/Login";
import Logo from "/logo-kedis.svg"
import { Button, TextField } from "@mui/material";

export default function RecoveryPassword(){
    const location = useLocation()
    const email = location.pathname.split("/")[2]

    return(
        <section style={style.container}>
            <S.Img src={Logo} alt="Logo Kedis" />
            <h2 style={{textAlign: "left"}}>Verificar código</h2>
            <p style={{textAlign: "left"}}>Digite abaixo o código de 4 dígitos enviado para o email: <strong>{email}</strong>.</p>
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
                // onClick={handleSend}
            >Verificar código</Button>
        </section>
    )
}

const style = {
    container: {
        width: 350
    },
    textField: {
        color: "#524E4E",
        width: "350px",
        marginTop: "10px",
        fontFamily: "var(--font-secondary)"
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