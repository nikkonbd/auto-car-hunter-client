import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../Layout/Home/Home';
import Login from '../Layout/Login/Login';
import Register from '../Layout/Register/Register';
import Blogs from '../Layout/Blogs/Blogs';
import AddCarToys from '../Layout/AddCarToys/AddCarToys';
import AllToys from '../Layout/AllToys/AllToys';
import SingleToys from '../Layout/SingleToys/SingleToys';

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
            },
            {
                path: 'addToys',
                element: <AddCarToys></AddCarToys>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'singleToys/:id',
                element: <SingleToys></SingleToys>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;