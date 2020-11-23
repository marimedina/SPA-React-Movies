import React from 'react';
import Header from '../Components/UI/Header';
import Movie from '../Components/Movie';
import { Route, Switch } from 'react-router-dom';

const DashBoardRoutes = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={Movie}/>
                </Switch>
            </div>
        </>
    );
}
 
export default DashBoardRoutes;