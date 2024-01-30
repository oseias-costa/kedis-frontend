import { Button, TextField } from "@mui/material";
import * as S from "../styles/Login";
import useLogin from "../controller/useLogin";

export default function Login(){
    const { login, setLogin, handleLogin } = useLogin()

    return(
        <S.LoginContainer>
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
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleLogin}
            >Entrar</Button>
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
    }
}
