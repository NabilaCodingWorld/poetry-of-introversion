import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import DailyBlog from "../Page/DailyBlog/DailyBlog";
import NobelAndMovie from "../Page/NobelAndMovie/NobelAndMovie";
import AboutMe from "../Page/AboutMe/AboutMe";
import Contact from "../Page/Contact/Contact";
import DailyBlogDetail from "../Page/DailyBlog/DailyBlogDetail";
import NovelDetails from "../Page/NobelAndMovie/NovelDetails";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Page/Dashboard/MyCart/MyCart";
import ManageBlog from "../Page/Dashboard/ManageBlog";
import AddNovel from "../Page/Dashboard/AddNovel";
import ManageNovel from "../Page/Dashboard/ManageNovel";
import AllUsers from "../Page/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dailyBlog",
        element: <DailyBlog></DailyBlog>
      },
      {
        path: "/dailyBlog/:_id",
        element: <PrivateRoute><DailyBlogDetail></DailyBlogDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://poetry-of-introversion-server.vercel.app/dailyBlog/${params._id}`)
      },
      {
        path: "/novel",
        element: <NobelAndMovie></NobelAndMovie>
      },

      {
        path: "/novel/:_id",
        element: <PrivateRoute><NovelDetails></NovelDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://poetry-of-introversion-server.vercel.app/novel/${params._id}`)
      },

      {
        path: "/aboutMe",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },


    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <AdminRoute><MyCart></MyCart></AdminRoute>
      },
      {
        path: 'manageBlog',
        element: <AdminRoute><ManageBlog></ManageBlog></AdminRoute>
      },
      {
        path: 'addNovel',
        element: <AdminRoute><AddNovel></AddNovel></AdminRoute>
      },
      {
        path: 'manageNovel',
        element: <AdminRoute><ManageNovel></ManageNovel></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);