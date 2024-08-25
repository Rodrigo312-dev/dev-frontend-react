import { createBrowserRouter } from 'react-router-dom';

import Default from '../screens/Default';
import Producto from '../screens/Product';
import LoginForm from '../screens/Forms/LoginForm';
import LandingPage from '../screens/LandingPage/LandingPage';
import App from '../App';

const basename = process.env.NODE_ENV === 'production' ? '/dev-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element: <LandingPage/>,
            },
            {
                path:'/deault',
                element: <Default/>,
            },
            {
                path:'/products',
                element:<Producto/>
            },
            {
                path:'/login',
                element:<LoginForm/>
            },
        ]
    }
], {
    basename: basename
});

export default routes;