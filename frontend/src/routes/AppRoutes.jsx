import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import AfterAuth from "../pages/AfterAuth/AfterAuth";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Home from "../pages/Dashboard/Home";
import InstitutionDetails from "../pages/Institution/InstitutionDetails";
import Class from "../pages/Class/Class"
import ClassDetails from "../pages/Class/ClassDetails"
import NewStudent from "../pages/Class/NewStudent"
import Instructor from "../pages/Instructor/Instructor";
import Institution from "../pages/Institution/Institution";
import NewInstructor from "../pages/Instructor/NewInstructor";
import Report from "../pages/Report/Report";
import DashboardRoutes from './DashboardRoutes';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/after-auth" element={<AfterAuth />} />
                {/* <Route path="/classes" element={<Class />} /> */}

                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/institution-details/:id" element={<InstitutionDetails />} />
                    <Route path="/institution-details/:id/classes" element={<Class />} />
                    <Route path="/institution-details/:id/classes/:classId" element={<ClassDetails />} />
                    <Route path="/institution-details/:id/classes/:classId/new-student" element={<NewStudent />} />
                    <Route path="/institutions" element={<Institution />} />
                    <Route path="/instructors" element={<Instructor />} />
                    <Route path="/new-instructor" element={<NewInstructor />} />
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