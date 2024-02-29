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
        ]
    },
]);

export default Router;