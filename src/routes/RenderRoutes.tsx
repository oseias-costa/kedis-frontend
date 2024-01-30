import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginTabs from "../components/LoginTabs";
import RecoveryPassword from "../components/RecoveryPassword";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<LoginTabs />} />
            <Route path="/recuperar-senha/:email" element={<RecoveryPassword />} />
        </>
    )
)