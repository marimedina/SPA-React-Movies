import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import MoviesList from '../Components/MoviesList';
import Header from '../Components/UI/Header';
import Footer from '../Components/UI/Footer';
import MovieActors from '../Components/MovieActors';
//import CardPrueba from '../Components/cardPrueba';


const AppRouter = () => {
    return (
        <>
        <Header titulo="THE MOVIES DB"/>
        <Router>
            <Switch>
                <Route exact path="/" component={MoviesList}></Route>
                <Route exact path="/:id" component={MovieCard}></Route>
                <Route exact path="/:id/actors" component={MovieActors}></Route>
            </Switch>
        </Router>
        <Footer/>
        </>
       
    );
}
 
export default AppRouter;