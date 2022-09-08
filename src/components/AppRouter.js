import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, authRoutes} from "../routes";
import Error404 from "../pages/Error404";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import Admin from "../pages/Admin";
import DevicePage from "../pages/DevicePage";
export const PATH = {
    LOGIN: '/auth',
    REGISTRATION: '/auth',
    ADMIN: '/admin',
    SHOP: '/shop',
    BASKET: '/basket',
    DEVICE: '/device'

}

const AppRouter = () => {
    const isAuth = false
    return (

        <Routes>
            {/*<Routes>*/}
                <Route path={'/'} element={<Shop/>}/>
                <Route path={PATH.ADMIN} element={<Admin/>}/>
                <Route path={PATH.LOGIN} element={<Auth/>}/>
                <Route path={PATH.REGISTRATION} element={<Auth/>}/>
                <Route path={PATH.BASKET} element={<Basket/>}/>
                <Route path={PATH.DEVICE + '/:id'} element={<DevicePage/>}/>
                <Route path={'*'} element={<Error404/>}/>
            {/*</Routes>*/}
            {/*{isAuth && authRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component}/>*/}
            {/*)*/}
            {/*}*/}

            {/*{publicRoutes.map(({path, Component}) =>*/}
            {/*    <Route key={path} path={path} element={Component}/>*/}
            {/*)*/}
            {/*}*/}

        </Routes>
    );
};

export default AppRouter;
