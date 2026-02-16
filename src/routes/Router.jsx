import { createBrowserRouter } from "react-router";
import Homelayout from "../components/layout/Homelayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        errorElement: <div>404 Not Found</div>,
    },
]);

export default router
