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
import DetailsService from "../Pages/DetailsService";
import PrivateRoute from "./PrivateRoute";
import { MdMyLocation } from "react-icons/md";
import Documentation from "../Pages/Documentation";
import Support from "../Pages/Support";
import Demos from "../Pages/Demos";
import Features from "../Pages/Features";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            loader: async () => fetch("http://localhost:3000/services"),
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
           path:'/documentation',
           Component: Documentation
        },
         {
           path:'/features',
           Component:Features
        },
         {
           path:'/demos',
           Component: Demos
        },
         {
           path:'/support',
           Component: Support
        },
        {
            path: '/services',
            loader: ()=> fetch('http://localhost:3000/services'),
            Component: Services
        },
        {
          path: '/detailsService/:id',
          loader: ()=> fetch('http://localhost:3000/services'),
          Component: DetailsService
        },
        {
          path:'/addService',
          element: <PrivateRoute><AddService></AddService> </PrivateRoute>
        },
        {
          path: '/myService',
          loader: ()=> fetch('http://localhost:3000/services'),
          element: <PrivateRoute><MyService></MyService> </PrivateRoute> 
        },
        {
          path:'/MyReview',
          element: <PrivateRoute>< MyReview></MyReview></PrivateRoute>
        }
    ]
  },
]);