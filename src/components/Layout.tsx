import { Outlet } from "react-router-dom"
import Logo from "/logo-kedis.svg"

export default function Layout(){
    return(
        <section style={style.container}>
            <div style={style.menu.box}>
                <img className="logo" src={Logo} style={style.menu.img} alt="Logo Kedis" />
            </div>
            <div>
                <header></header>
                <div><Outlet /></div>
            </div>
        </section>
    )
}

const style = {
    container: {
        display: "flex",
        justifyContent: "start"
    },
    menu: {
        box: {
            borderWidthRight: 1,
            borderColor: "red" 
        },
        img: {
            width: 120,
            height: "auto"
        }
    }
}