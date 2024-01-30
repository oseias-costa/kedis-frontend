import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginTabs from "../components/LoginTabs";
import Register from "../components/Register";
import VerifyCode from "../components/VerifyCode";
import RecoveryPassword from "../components/RecoveyPassword";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<LoginTabs />} />
            <Route path="/validar-codigo/:email" element={<VerifyCode />} />
            <Route path="/recuperar-senha/:email" element={<RecoveryPassword />} />
            <Route path="/registrar" element={<Register />} />
        </>
    )
)