import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import DailyBlog from "../Page/DailyBlog/DailyBlog";
import NobelAndMovie from "../Page/NobelAndMovie/NobelAndMovie";

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
            path: "/novel",
            element: <NobelAndMovie></NobelAndMovie>
        },
        
        
      ]
    },
  ]);