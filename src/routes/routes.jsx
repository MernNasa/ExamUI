import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import LandingPage from "../pages/landingpage/LandingPage";
import Root from "../Root";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import PrivateRouting from "./privateRouting/PrivateRouting";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Privacy from "../pages/privacy/Privacy";
import RegisterPage from "../pages/register/RegisterPage";
import Admin_Overview from "../pages/admin/adminComponents/adminContent/dashboardoverview/Admin_Overview";
import UserManagement from "../pages/admin/adminComponents/adminContent/usermanagement/UserManagement";
import ExamManagement from "../pages/admin/adminComponents/adminContent/exammanagement/ExamManagement";
import Result_Reports from "../pages/admin/adminComponents/adminContent/resultReports/Result_Reports";
import Schedule_Exams from "../pages/admin/adminComponents/adminContent/scheduleExams/Schedule_Exams";
import Admin_Settings from "../pages/admin/adminComponents/adminContent/adminsettings/Admin_Settings";
import Admin_Support from "../pages/admin/adminComponents/adminContent/adminSupport/Admin_Support";
import Exam_Creation_Form from "../pages/admin/adminComponents/adminContent/examcreation/Exam_Creation_Form";
import Add_Questions from "../pages/admin/adminComponents/adminContent/examcreation/Add_Questions";
import Exam_Details from "../pages/admin/adminComponents/adminContent/scheduleExams/Exam_Details";

export const route=createBrowserRouter([
    {
                path:"/",
                element:<Root/>,
                children:[
                    {
                        path:"/",
                        element:<LandingPage/>
                    },
                    {
                        path:"/login",
                        element:<Login/>
                    },
                    {
                        path:"/admin",
                        element:<PrivateRouting requiredRole="admin">
                            <AdminDashboard/>
                        </PrivateRouting>,
                        children:[
                            {
                                path:"/admin",
                                element:<Admin_Overview/>
                            },
                            {
                                path:"/admin/usermanagement",
                                element:<UserManagement/>
                            },
                            {
                                path:"/admin/exammanagement",
                                element:<ExamManagement/>
                            },
                            {
                                path:"/admin/resultmanagement",
                                element:<Result_Reports/>
                            },
                            {
                                path:"/admin/scheduledexams",
                                element:<Schedule_Exams/>
                            },
                            {
                                path:"/admin/adminsettings",
                                element:<Admin_Settings/>
                            },
                            {
                                path:"/admin/adminsupport",
                                element:<Admin_Support/>
                            },
                           
                        ]
                    },
                    {
                         
                        path:"/examcreation",
                        element:<PrivateRouting  requiredRole="admin">
                                    <Exam_Creation_Form/>
                                </PrivateRouting>
                            
                    },
                    {
                        path:"/addquestions",
                        element:<PrivateRouting requiredRole="admin">
                                <Add_Questions/>
                        </PrivateRouting>
                    },
                    {
                        path:"/exam_details",
                        element:<PrivateRouting requiredRole="admin">
                                <Exam_Details/>
                        </PrivateRouting>
                    },
                    {
                        path:"/user",
                        element:<PrivateRouting requiredRole="user">
                            <UserDashboard/>
                        </PrivateRouting>
                    },
                    {
                        path:"/about",
                        element:<About/>
                    },
                    {
                        path:"/contact",
                        element:<Contact/>
                    },
                    {
                        path:"/privacy",
                        element:<Privacy/>
                    },
                    {
                        path:"/register",
                        element:<RegisterPage/>
                    }
                ]
    }
])