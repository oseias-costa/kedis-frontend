import { CircularProgress } from "@mui/material";
import { Img } from "../styles/Login";
import Logo from '/logo-kedis.svg'

export default function Load({load}:{load: boolean}){
    const style = {
        display: load ? "flex" : "none",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        position: "fixed" as const,
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 10,
        top: 0,
        left: 0
    }

    return(
        <section style={style}>
            <Img src={Logo} alt="Logo Kedis" />
            <CircularProgress style={{width: 40, height: 40}} />
        </section>
    )
}