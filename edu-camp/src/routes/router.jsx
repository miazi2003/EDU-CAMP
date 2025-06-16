import {createBrowserRouter} from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import SignIn from "../pages/home/sign In/SignIn";
import SignUp from "../pages/home/sign up/SignUp";
import ErrorPage from "../pages/home/errorPage/ErrorPage";
import CreateAssignment from "../pages/home/Create Assignment/CreateAssignment";
import Assignments from "../pages/assignment/Assignments";
import ViewAssignment from "../pages/assignment/ViewAssignment";
import SubmitAssignment from "../pages/assignment/SubmitAssignment";
import MySubmittedAssignment from "../pages/assignment/MySubmittedAssignment";
import UpdateAssignment from "../pages/assignment/UpdateAssignment";
import PendingAssignment from "../pages/assignment/PendingAssignment";
import GiveMarks from "../give marks/GiveMarks";




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
        {path : '/assignments' , element:<Assignments></Assignments>},
        {path : '/viewAssignments/:id' , element:<ViewAssignment></ViewAssignment>},
        {path : '/submitAssignment/:id' , element:<SubmitAssignment></SubmitAssignment>},
        {path : '/attemptedAssignment' , element:<MySubmittedAssignment></MySubmittedAssignment>},
        {path : '/updateAssignment/:id' , element:<UpdateAssignment></UpdateAssignment>},
        {path : '/pendingAssignment' , element:<PendingAssignment></PendingAssignment>},
        {path : '/giveMarks/:id' , element:<GiveMarks></GiveMarks>},
        

       

        
    ] 
}
])