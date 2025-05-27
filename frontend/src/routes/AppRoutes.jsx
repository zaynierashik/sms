import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import AfterAuth from "../pages/AfterAuth/AfterAuth";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Home from "../pages/Dashboard/Home";
import Institution from "../pages/Institution/Institution";
import Instructor from "../pages/Instructor/Instructor";
import Report from "../pages/Report/Report";
import DashboardRoutes from './DashboardRoutes';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/after-auth" element={<AfterAuth />} />

                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/institutions" element={<Institution />} />
                    <Route path="/instructors" element={<Instructor />} />
                    <Route path="/report" element={<Report />} />
                </Route>

                {/* Optionally use DashboardRoutes */}
                {Array.isArray(DashboardRoutes) && DashboardRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}