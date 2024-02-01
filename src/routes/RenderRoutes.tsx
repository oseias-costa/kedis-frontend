import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginTabs from "../components/LoginTabs";
import VerifyCode from "../components/VerifyCode";
import Dashboard from "../pages/Dashboard";
import { PrivateRoute } from "./PrivateRoutes";
import Layout from "../components/Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/validar-codigo/:email" element={<VerifyCode />} />
            <Route path="/entrar" element={<LoginTabs />} />
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Route>
        </>
    )
)