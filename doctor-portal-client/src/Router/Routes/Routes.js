import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from './../../Pages/Home/Home/Home';
import About from './../../Pages/About/About';
import Appointment from './../../Pages/Appointment/Appointment/Appointment';
import Review from './../../Pages/Review/Review';
import Contact from './../../Pages/Contact/Contact';
import Error from './../../Pages/Error/Error';
import LogIn from './../../Pages/LogIn/LogIn';
import Registration from './../../Pages/Registration/Registration';
import Doctors from '../../Pages/Registration/doctors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/appointment",
            element: <Appointment />
        },
        {
            path: "/review",
            element: <Review />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/login",
            element: <LogIn />
        },
        {
            path: "/registration",
            element: <Registration />
        },
        {path:"/doctors",
         element: <Doctors />
        },
         
        {
            path: "*",
            element: <Error />
        }
    ]
  },
]);

export default router;
