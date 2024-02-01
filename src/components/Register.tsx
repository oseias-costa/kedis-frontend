import { Button, CircularProgress, TextField } from "@mui/material";
import * as S from "../styles/Login";
import useRegister from "../controller/useRegister";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

export default function Register(){
    const { register, setRegister, handleRegister } = useRegister()
    const user = useSelector((state: RootState) => state.user.user)

    if (user.id) {
        return <Navigate to="/" replace={true} />
    }

    return(
        <S.LoginContainer>
            <TextField 
                label="Nome" 
                error={register.errorType === "firstName" && register.error !== ""}
                helperText={register.errorType === "firstName" && register.error}
                style={style.textField} 
                variant="filled" 
                size="small"
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setRegister({
                    ...register, 
                    firstName: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Sobrenome" 
                error={register.errorType === "lastName" && register.error != ""}
                helperText={register.errorType === "lastName" && register.error}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setRegister({
                    ...register, 
                    lastName: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Email" 
                error={register.errorType === "email" && register.error != ""}
                helperText={register.errorType === "email" && register.error}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color: "#fff"}}}
                onChange={(e) => setRegister({
                    ...register, 
                    email: e.target.value, 
                    error: ""})
                } 
            />
            <TextField 
                label="Senha" 
                error={register.errorType === "password" && register.error != ""}
                helperText={register.errorType === "password" && register.error}
                style={style.textField} 
                variant="filled"
                size="small" 
                sx={{input: {color  : "#fff"}}}
                onChange={(e) => setRegister({
                    ...register, 
                    password: e.target.value, 
                    error: ""})
                } 
            />
            <Button
                disabled={register.loading} 
                variant="contained" 
                sx={style.button} 
                size="small"
                onClick={handleRegister}
            >{register.loading ? <CircularProgress style={{width: 20, height: 20}} /> : "Registrar"}</Button>
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
        "@media(max-width: 800px)": {
            paddingLeft: "24px",
        }
    }
}
