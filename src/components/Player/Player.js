import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    //console.log(props);
    const {image,name,base_price}=props.player;
    return (
        <div className="player">
            <div className="info-section">
                <img className="image" src={image} alt=""/>
                <h4 className="player-name">Name:{name}</h4>
                <h5>Price: $ {base_price}</h5>
                <button className="btn btn-success" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart}/>Add to Team</button>
            </div>
        </div>
    );
};

export default Player;