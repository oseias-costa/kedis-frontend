import { useLocation, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function RecoveryPassword(){
    const location = useLocation()
    const navigate = useNavigate()

    const handleUpdate = () => {
        return navigate("/login")
    }

    return(
        <section style={style.container}>
            <h2 style={{textAlign: "left"}}>Alterar Senha</h2>
            <p style={style.text}>Digite abaixo a nova senha:</p>
            <TextField 
                label="Nova senha"
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <TextField 
                label="Confirme a senha"
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <Button 
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleUpdate}
            >Salvar nova senha</Button>
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