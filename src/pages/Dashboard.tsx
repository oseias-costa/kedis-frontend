import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fecthUser, initialUserState } from "../redux/user.slice";
import { RootState } from "../redux/store";
import ProgressBar from "../components/ProgressBar";
import SampleExams from "../components/SampleExams";
import DashboardStatistics from "../components/DashboardStatistics";

export default function Dashboard(){
    const dispatch = useDispatch()
    const user = useSelector((state:RootState) => state.user.user)

    return(
        <section>
            <h1>Dashboard</h1>
            <p style={s.welcome}>Bem vindo, {user.firstName}.</p>
            <div style={s.panel.container}>
                <div style={s.panel.header}>
                    <p style={{paddingLeft: 20, fontSize: 14, width: 308.7}}>Últimos simulados</p>
                    <p style={{fontSize: 14, paddingRight: 50}}>Certas</p>
                    <p style={{fontSize: 14, paddingRight: 60}}>Erradas</p>
                    <p style={{fontSize: 14, paddingRight: 70}}>%</p>
                    <p style={{fontSize: 14}}>Pontos</p>
                </div>
            <div style={{display: "flex"}}>
                <div style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
                    <p style={{fontSize: 12}}>Fevereiro</p>
                    <p style={{fontSize: 38, position: "relative", bottom: 10, fontWeight: 400}}>06</p>
                </div>
                <p style={{padding: 20, fontSize: 18, width: 170}}>Simulado Aws Cloud Pratictioner #1</p>
                <ProgressBar number={90} text="55" />
                <ProgressBar number={10} text="10" />
                <ProgressBar number={89} text="89" />
                <p style={{padding: 25, fontSize: 20}}>925</p>
                
            </div>
            <div style={{display: "flex"}}>
                <div style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20}}>
                    <p style={{fontSize: 12}}>Fevereiro</p>
                    <p style={{fontSize: 38, position: "relative", bottom: 10, fontWeight: 400}}>24</p>
                </div>
                <p style={{padding: 20, fontSize: 18, width: 170}}>Simulado Aws Cloud Pratictioner #2</p>
                <ProgressBar number={70} text="46" />
                <ProgressBar number={30} text="19" />
                <ProgressBar number={70} text="70" />
                <p style={{padding: 25, fontSize: 20}}>925</p>
            </div>

            </div>
            <SampleExams />
            <DashboardStatistics />
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
            height: 230,
            width: 690,
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