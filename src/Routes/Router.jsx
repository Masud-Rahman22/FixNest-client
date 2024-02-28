import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default Router;