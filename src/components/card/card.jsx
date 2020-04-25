import  React from 'react';

import './card.css';

export const Card = props => (
    <li className="card-item">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </li>
)