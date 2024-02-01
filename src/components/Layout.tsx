import { Link, Outlet, useLocation } from "react-router-dom"
import Logo from "/logo-kedis.svg"
import Button from "@mui/material/Button"

export default function Layout(){
    const location = useLocation()
    const path = location.pathname

    const links = menuData.map((item) => {
        return(
            <Link to={item.path} key={item.id}>
                <Button 
                    style={style.menu.link} 
                    variant="text"
                    sx={{ 
                        bgcolor: path === item.path ? "#26282B" : null,
                        color: path === item.path ? "#D3D3D3" : "#959595"
                    }}
                >
                    {item.text}
                </Button>
            </Link>
        )
    })

    return(
        <section style={style.container}>
            <div style={style.menu.box}>
                <img className="logo" src={Logo} style={style.menu.img} alt="Logo Kedis" />
                <div>{links}</div>
            </div>
            <div>
                <header style={style.header}></header>
                <div style={style.content}><Outlet /></div>
            </div>
        </section>
    )
}

const style = {
    container: {
        display: "flex",
        justifyContent: "start",
        height: "100vh",
    },
    content: {
        padding: 32
    },
    header: {
        borderBottom: "1px solid #40464D",
        height: 50,
        width: "calc(100vw - 200px)"
    },
    menu: {
        box: {
            borderRight: "1px solid #40464D", 
            width: 200,
        },
        img: {
            width: 120,
            height: "auto"
        }, 
        link: {
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
            textDecoration: "none",
            fontWeight: 500,
            paddingBottom: 0,
            justifyContent: "start",
            paddingTop: 3,
            marginBottom: 4,
            paddingLeft: 26,
            borderRadius: 4,
            textTransform: "capitalize" as const
        }
    }
}

const menuData = [
    {
        id: 1, 
        path: "/",
        text: "Dashboard"
    },
    {
        id: 2, 
        path: "/simulados",
        text: "Simulados"
    },
    {
        id: 3, 
        path: "/resultados",
        text: "Resultados"
    },
    {
        id: 4, 
        path: "/planos",
        text: "Planos"
    },
    {
        id: 5, 
        path: "/conta",
        text: "Conta"
    },
]