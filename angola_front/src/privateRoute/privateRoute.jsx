import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const userData = localStorage.getItem("token")
    return userData ? <Outlet/> : <Navigate to='/login'/>
};