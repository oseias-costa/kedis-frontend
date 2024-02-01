import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fecthUser, initialUserState } from "../redux/user.slice";
import { RootState } from "../redux/store";

export default function Dashboard(){
    const dispatch = useDispatch()
    const user = useSelector((state:RootState) => state.user.user)

    return(
        <section>
            <h1>Dashboard</h1>
            <p style={s.welcome}>Bem vindo, {user.firstName}.</p>
            <div style={s.panel.container}>
                <div style={s.panel.header}>
                    <p style={{paddingLeft: 20, fontSize: 14, width: 298.7}}>Últimos simulados</p>
                    <p style={{fontSize: 14}}>Certas</p>
                </div>
            <div style={{display: "flex"}}>
                <div style={{padding: 20}}>
                    <p style={{fontSize: 12}}>Fevereiro</p>
                    <p style={{fontSize: 40, position: "relative", bottom: 10}}>06</p>
                </div>
                <p style={{padding: 20, fontSize: 18, width: 170}}>Simulado Aws Cloud Pratictioner #1</p>
            </div>
            </div>
            <Button onClick={() => dispatch(fecthUser(initialUserState))}>Logout</Button>
        </section>
    )
}

const s = {
    welcome: {
        fontWeight: 200,
        position: "relative" as const,
        bottom: 8,
        color: "#959595",
        fontSize: 14,
        paddingBottom: 20
    },
    panel: {
        container: {
            border: "1px solid #524E4E",
            height: 200,
            width: 600,
            borderRadius: 10
        },
        header: {
            borderBottom: "1px solid #524E4E",
            height: 35,
            display: "flex",
            alignItems: "center"     
        }
    }
}