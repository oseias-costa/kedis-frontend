import { Button } from "@mui/material";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type LinkMenuProps = {
    path: string, 
    key: number, 
    text: string,
    itemPath: string,
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export default function LinkMenu({path, key, text, itemPath, onClick}:LinkMenuProps){
    return(
        <Link to={itemPath} key={key} onClick={onClick}>
                <Button 
                    style={style.link} 
                    variant="text"
                    sx={{ 
                        bgcolor: itemPath === path ? "#26282B" : null,
                        color: itemPath === path ? "#D3D3D3" : "#959595"
                    }}
                >
                    {text}
                </Button>
            </Link>
    )
}

const style = {
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