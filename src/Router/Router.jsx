import {
  createBrowserRouter
} from "react-router";
import Root from "../Main/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Resister from "../Pages/Resister";
import SignIn from "../Pages/SignIn";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            Component : Home
        },
        {
            path: 'resister',
            Component: Resister
        },
        {
            path: 'SignIn',
            Component: SignIn
        },
        {
            path: '/contact',
            Component: Contact
        },
        {
            path: 'services',
            Component: Services
        }
    ]
  },
]);