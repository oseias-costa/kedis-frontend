import { Button, TextField } from "@mui/material";


export default function SendCodeRecoveryEmail(){
    return(
        <div style={{width: 350}}>
            <h2 style={style.title}>Recuperação de senha</h2>
            <p style={style.text}>Preencha se email abaixo e clique em enviar. Você receberá um código de 4 dígitos no seu email.</p>
            <TextField 
                label="Email"
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <Button 
                variant="contained" 
                sx={style.button} 
                size="small"
                // onClick={handleLogin}
            >Recuperar senha</Button>
        </div>
    )
}

const style = {
    title: {
        fontFamily: "var(--font-secondary)",
        fontSize: "32px",
        fontWeight: 400,
    },
    text: {
        fontFamily: "var(--font-secondary)",
        fontSize: "18px",
        fontWeight: 200,
    },
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
    }
}