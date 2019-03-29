import React from 'react';
import './StarWars.css';

const Char = props => {
    return (
        <div className=' char '>
            
            <h2>{props.charName.name}</h2>
            <h4>Birth Year: {props.charName.birth_year}</h4>

        </div >
    );
}




export default Char;