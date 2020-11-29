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
//import CardPrueba from '../Components/cardPrueba';


const AppRouter = () => {
    return (
        <>
        <Header titulo="Movies"/>
        <Router>
            <Switch>
                <Route exact path="/" component={MoviesList}></Route>
                <Route exact path="/:id" component={MovieCard}></Route>
            </Switch>
        </Router>
        <Footer/>
        </>
       
    );
}
 
export default AppRouter;