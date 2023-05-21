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
import MyToys from '../Layout/myToys/MyToys';
import PrivateRoute from './PrivateRoute';
import PageNotFound from '../Layout/PagenotFound/PageNotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
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
                element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-car-pro-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            }
        ]
    },
]);

export default router;