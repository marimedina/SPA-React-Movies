import React from 'react';

const Movie = ({movie}) => {

    const {title, popularity, backdrop_path, overview, original_language, vote_average} = movie;

    return ( 
        <div className="col s12 m7">
            <div className="card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={backdrop_path}/>
                    </div>
                    <h5>{title}</h5>
                    <p>{overview}</p>
                </div>

                <div className="card-action">

                </div>

            </div>
        </div>
    );
}
 
export default Movie;