import {createBrowserRouter} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import { Children} from "react";
import Home from "../pages/home/Home";
import SignIn from "../pages/home/sign In/SignIn";
import SignUp from "../pages/home/sign up/SignUp";
import ErrorPage from "../pages/home/errorPage/ErrorPage";
import CreateAssignment from "../pages/home/Create Assignment/CreateAssignment";
import Assignments from "../pages/assignment/Assignments";






export const router = createBrowserRouter([
{
    path : '/' ,
    Component : MainLayouts,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
        {index : true , element : <Home></Home>},
        {path : '/signIn' , element : <SignIn></SignIn>},
        {path : '/signUp' , element : <SignUp/>},
        {path : '/createAssignment' , element : <CreateAssignment></CreateAssignment>},
        {path : '/assignments' , element:<Assignments></Assignments>}
        
    ] 
}
])