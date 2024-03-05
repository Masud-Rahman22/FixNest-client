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
import UpdateAccessories from "../pages/Our_Accessories/UpdateAccessories";
import FAQ from "../pages/FAQs/FAQ";
import Profile from "../pages/profile/Profile";

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
                element: <Terms_Cond></Terms_Cond>
            },
            {
                path: "/ourWork",
                element: <OurWork></OurWork>
            },
            {
                path: "/addAccessories",
                element: <PrivateRoute>
                    <AddAccessories></AddAccessories>
                </PrivateRoute>
            },
            {
                path: "/ourAccessories",
                element:<OurAccessories></OurAccessories>
            },
            {
                path: "/allServices",
                element: <AllServices></AllServices>
            },
            {
                path: "/addService",
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAccessories></UpdateAccessories></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
        ]
    },
]);

export default Router;