import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { fecthUser, initialUserState } from "../redux/user.slice";

export default function Dashboard(){
    const dispatch = useDispatch()

    return(
        <section>
            <h1>Dashboard</h1>
            <Button onClick={() => dispatch(fecthUser(initialUserState))}>Logout</Button>
        </section>
    )
}