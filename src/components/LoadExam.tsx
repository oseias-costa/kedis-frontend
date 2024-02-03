import { CircularProgress } from "@mui/material";

export default function Load({load}:{load: boolean}){
    const style = {
        display: load ? "flex" : "none",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        position: "fixed" as const,
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 200,
        top: 0,
        left: 0,
        backgroundColor: "#181b1ec9"
    }

    return(
        <section style={style}>
            <CircularProgress style={{width: 40, height: 40}} />
        </section>
    )
}