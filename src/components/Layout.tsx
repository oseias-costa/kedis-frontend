import { Outlet, useLocation } from "react-router-dom"
import Logo from "/logo-kedis.svg"
import LinkMenu from "./LinkMenu"
import { useDispatch } from "react-redux"
import { fecthUser, initialUserState } from "../redux/user.slice"

export default function Layout(){
    const location = useLocation()
    const path = location.pathname
    const dispatch = useDispatch()

    const links = menuData.map((item) => {
        return <LinkMenu 
                    key={item.id} 
                    path={path} 
                    itemPath={item.path} 
                    text={item.text} 
                />
    })

    return(
        <section style={style.container}>
            <div style={style.menu.box}>
                <div>
                    <img className="logo" src={Logo} style={style.menu.img} alt="Logo Kedis" />
                    <div>{links}</div>
                </div>
                <div style={{paddingBottom: 20}}>
                    <LinkMenu 
                        key={5} 
                        itemPath="/conta" 
                        text="Conta" 
                        path={path} 
                    />
                    <LinkMenu 
                        key={6} 
                        itemPath="/sair" 
                        text="Sair" 
                        path={path} 
                        onClick={() => dispatch(fecthUser(initialUserState))} 
                    />
                </div>
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
        height: "100vh"
    },
    content: {
        padding: 32,
        paddingLeft: 232,
        marginTop: 50
    },
    header: {
        borderBottom: "1px solid #40464D",
        borderLeft: "1px solid #40464D",
        height: 50,
        width: "calc(100vw - 215px)",
        marginLeft: 200,
        position: "fixed" as const,
        backgroundColor: "#181B1E",
        zIndex: 100
    },
    menu: {
        box: {
            position: "fixed" as const,
            borderRight: "1px solid #40464D", 
            width: 200,
            height: "100vh",
            display: "flex",
            flexDirection: "column" as const,
            justifyContent: "space-between"
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
    }
]