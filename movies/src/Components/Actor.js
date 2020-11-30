import React from 'react';

const Actor = ({actor}) => {


    const {name, character, profile_path} = actor
    const img = `https://image.tmdb.org/t/p/w500${profile_path}`



    return (
        <div className='container'>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={img} className=' circle'></img>
                    <span className="title">{name}</span>
                    <p>Character: {character}</p>
                </li>
            </ul>
        </div>
    );
}
 
export default Actor;