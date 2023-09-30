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
        element: <DailyBlogDetail></DailyBlogDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/dailyBlog/${params._id}`)
      },
      {
        path: "/novel",
        element: <NobelAndMovie></NobelAndMovie>
      },

      {
        path: "/novel/:_id",
        element: <NovelDetails></NovelDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/novel/${params._id}`)
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
]);