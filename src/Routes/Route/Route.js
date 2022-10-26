import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Coureses/Course";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/news')
            },

            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            // },
            
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Course></Course>,
                children : [
                    {
                        path: '/courses/:id',
                        element: <Category></Category>,
                        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                    },
                ]
            },
        ]

    },
    
])