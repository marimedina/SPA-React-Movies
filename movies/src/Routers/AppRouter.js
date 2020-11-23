import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Movie from '../Components/Movie';
import MovieCard from '../Components/MovieCard';
import Footer from '../Components/UI/Footer';
import Header from '../Components/UI/Header';


const AppRouter = () => {
    return (
        <Router>
                

                <Switch>
                    <Route exact path="/:id" component={MovieCard}/>
                    <Route exact path="/" component={Movie}/>
                </Switch>

                
        </Router>
    );
}
 
export default AppRouter;