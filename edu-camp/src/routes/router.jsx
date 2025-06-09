import {createBrowserRouter} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import { Children} from "react";
import Home from "../pages/home/Home";
import SignIn from "../pages/home/sign In/SignIn";
import SignUp from "../pages/home/sign up/SignUp";






export const router = createBrowserRouter([
{
    path : '/' ,
    Component : MainLayouts,
    children :[
        {index : true , element : <Home></Home>},
        {path : '/signIn' , element : <SignIn></SignIn>},
        {path : '/signUp' , element : <SignUp/>},
        
    ] 
}
])