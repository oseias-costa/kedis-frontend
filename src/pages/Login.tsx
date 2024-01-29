import { Button, TextField } from "@mui/material";
import * as S from "../styles/Login";
import useLogin from "../controller/useLogin";
import Logo from "/logo.svg"

export default function Login(){
    const { login, setLogin, handleLogin } = useLogin()

    return(
        <S.LoginContainer>
            <S.Img src={Logo} alt="Logo Kedis" />
            <TextField 
                label="Email" 
                error={login.error != ""}
                helperText={login.error !== "" ? login.error : null}
                style={style.textField} 
                variant="filled" 
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
                size="large"
                onClick={handleLogin}
            >Entrar</Button>
        </S.LoginContainer>
    )
}

const style = {
    textField: {
        color: "#fff",
        width: "300px",
        marginTop: "10px",
    },
    button: {
        fontFamily: "var(--font-secondary)",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: 400,
        backgroundColor: "#FF5F05",
        marginTop: "10px",
        width: "300px"
    }
}
