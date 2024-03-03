import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Pricing from "../pages/pricing/Pricing";
import AppointmentBooking from "../components/appointment_booking/AppointmentBooking";
import Terms_Cond from "../components/terms&conditions/Terms_Cond";
import OurWork from "../components/our_work/OurWork";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/Add_Services/AddService";
import AllServices from "../pages/All_Services/AllServices";
import AddAccessories from "../pages/Add_Accessories/AddAccessories";
import OurAccessories from "../pages/Our_Accessories/OurAccessories";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>
            },
            {
                path: "/appointment",
                element: <AppointmentBooking></AppointmentBooking>
            },
            {
                path: "/terms&conditions",
                element: <PrivateRoute>
                    <Terms_Cond></Terms_Cond>
                </PrivateRoute>
            },
            {
                path: "/ourWork",
                element: <OurWork></OurWork>
            },
            {
                path: "/addAccessories",
                element: <AddAccessories></AddAccessories>
            },
            {
                path: "/ourAccessories",
                element: <OurAccessories></OurAccessories>
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>
            },
            {
                path: "/addService",
                element: <AddService></AddService>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ]
    },
]);

export default Router;