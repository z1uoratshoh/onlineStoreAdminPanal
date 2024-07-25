import { lazy } from "react";

export const Login = lazy(() => import ("../pages/autentification/login/login"))
export const ForgotPassword_1 = lazy(() => import ("../pages/autentification/forgotPasswor_1/gorgotPassword_1"))
export const ForgotPasswor_2 = lazy(() => import ("../pages/autentification/forgotPasswor_2/forgotPassword_2"))
export const Dashboard = lazy(() => import ("../pages/dashboard/dashboard"))
export const Orders = lazy(() => import ("../pages/orders/orders"))
export const Products = lazy(() => import ("../pages/products/products"))
export const Other = lazy(() => import ("../pages/other/other"))
export const Cotegories = lazy(() =>import("../pages/other/cotegories/cotegories"))
export const Brends = lazy(() => import("../pages/other/brends/brends"))