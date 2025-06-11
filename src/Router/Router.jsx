import {
  createBrowserRouter
} from "react-router";
import Root from "../Main/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import SignIn from "../Pages/SignIn";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import MyService from "../Pages/MyService";
import MyReview from "../Pages/MyReview";
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
            path: '/resister',
            Component: Register
        },
        {
            path: '/SignIn',
            Component: SignIn
        },
        {
            path: '/contact',
            Component: Contact
        },
        {
            path: '/services',
            Component: Services
        },
        {
          path:'/addService',
          Component: AddService
        },
        {
          path: '/myService',
          Component: MyService
        },
        {
          path:'/MyReview',
          Component: MyReview
        }
    ]
  },
]);