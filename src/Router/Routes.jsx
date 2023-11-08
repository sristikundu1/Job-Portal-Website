import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Ragistration from "../Pages/Registration/Ragistration";
import Block from "../Pages/Block/Block";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdateJobs from "../Pages/UpdateJobs/UpdateJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("/jobs.json")

            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Ragistration></Ragistration>
            },
            {
                path:"/block",
                element:<Block></Block>
            },
            {
                path:"/alljob",
                element:<AllJobs></AllJobs>,
                loader: () => fetch('https://dream-catalyst-server.vercel.app/jobs')
            },
            {
                path:"/jobdetail/:id",
                element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                loader:({params}) => fetch(`https://dream-catalyst-server.vercel.app/jobs/${params.id}`)
            },
            {
                path:"/addjob",
                element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
            },
            {
                path:"/myjob",
                element:<PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
            },
            {
                path:"/updatejob/:id",
                element:<UpdateJobs></UpdateJobs>,
                loader:({params}) => fetch(` https://dream-catalyst-server.vercel.app/jobs/${params.id}`)
            },
            {
                path:"/appliedjob",
                element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
            }
        ]
    }
])

export default Routes;