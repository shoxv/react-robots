import React from 'react';
import {Card} from '../card/card';
import './card-list.css';


export const CardList = (props) => {
    return(
        props.cards.map(card=>{
            return <Card monster={card} key={card.id}></Card>
        })
    )
}