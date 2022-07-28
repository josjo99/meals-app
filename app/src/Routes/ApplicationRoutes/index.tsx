import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

const Login = React.lazy(() => import('../../Pages/Login'));

const Router = () => {
    return(
        <Routes>
            <Route 
                path='/' 
                element={
                    <Suspense>
                        <Login />
                    </Suspense>
                }
            />
        </Routes>
    )
}

export default Router;