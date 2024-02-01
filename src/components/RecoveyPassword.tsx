import { Button, CircularProgress, TextField } from "@mui/material";
import useRecoveryPassword from "../controller/useRecoveryPassword";

export default function RecoveryPassword({email}:{email: string}){
    const {state, setState, handleChangePassword} = useRecoveryPassword(email)

    return(
        <section style={style.container}>
            <h2 style={{textAlign: "left"}}>Alterar Senha</h2>
            <p style={style.text}>Escolha uma nova senha e abaixo coloque a senha novamente.</p>
            <TextField 
                label="Nova senha"
                onChange={(e) => setState({...state, error: "", password: e.target.value})}
                style={style.textField} 
                error={state.error !== ""}
                helperText={state.error}
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <TextField 
                label="Confirme a senha"
                onChange={(e) => setState({...state, error: "", verifyPassword: e.target.value})}
                style={style.textField} 
                error={state.error !== ""}
                helperText={state.error}
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
            />
            <Button 
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleChangePassword}
            >{state.loading ? <CircularProgress  style={{width: 20, height: 20}} /> : "Salvar nova senha"}</Button>
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
        width: "350px",
        height: 40
    }
}