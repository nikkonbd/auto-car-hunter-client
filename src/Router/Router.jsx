import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../Layout/Home/Home';
import Login from '../Layout/Login/Login';
import Register from '../Layout/Register/Register';
import Blogs from '../Layout/Blogs/Blogs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router;