
export default function ProgressBar({number, text}: {number: number, text: string}){
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginLeft: 20,
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        background: `radial-gradient(closest-side, #181B1E 78%, transparent 80% 100%),
                    conic-gradient(#F3F6F9 ${number}%, #181B1E 0)`
    }

    return(
        <div style={style}><p style={{fontSize: 22}}>{text}</p></div>
    )
}