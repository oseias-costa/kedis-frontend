import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { style } from "./RecoveyPassword"

export type CardProps = {
    cloud: string,
    name: string,
    description: string,
    path: string
}

export default function Card({cloud, name, description, path}: CardProps){
    return(
        <CardContainer>
            <p className="cloud">{cloud}</p>
            <h3 className="title">{name}</h3>
            <p className="text">{description}</p>
                <Link to={`exame/${path}`} state={{ name, description }}>
                <Button 
                    sx={[style.button, {width: "100%", fontSize: 14, height: 32}]} 
                    variant="contained"
                >Realizar</Button>
            </Link>
        </CardContainer>
    )   
}

const CardContainer = styled.div`
    background-color: #303235;
    flex-direction: column;
    width: 190.7px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid #524E4E;
    padding: 12px;
    border-radius: 4px;
    margin-top: 10px;

    .cloud {
        border: 1px solid #524E4E;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 20px;
        font-size: 12px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 22px;
    }

    .title {    
        font-size: 24px;
        font-weight: 300;
        padding-top: 26px;
        padding-bottom: 10px;
        line-height: 1.1;
    }

    .text {
        font-size: 13px;
        font-weight: 100;
        padding-bottom: 30px;
    }

    .button {
        font-family: var(--font-secondary),
        text-transform: capitalize,
        font-size: 18px,
        font-weight: 400,
        background-color: #F2F2F0,
        margin-top: 10px,
        width: 350px,
        height: 40
    }
`