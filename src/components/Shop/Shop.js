import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Shop.css';
const Shop = () => {

    const[players,setPlayers]=useState([]);
    const [playersCart,setPlayersCart]=useState([]);
    useEffect(()=>{
        fetch('https://api.mocki.io/v1/c922e83b')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setPlayers(data))
        .catch(error=>console.log(error))
    },[])
    const handleAddPlayer=(player)=>{
        //console.log('Product Added',player);
        let flag=0;
        for(let i=0;i<playersCart.length;i++)
        {
            
            const addingNewPlayer=playersCart[i];
            if(addingNewPlayer.name==player.name)
            {
                flag=1;
            }
        }
        if(flag==0)
        {
            const newCart=[...playersCart,player];
            setPlayersCart(newCart);
        }
        else
        {
            alert("This player is already added. Please select another player.");
        }
    }
    return (
        <div className="main-container">
        <div className="player-container">
        {
            players.map(player=><Player handleAddPlayer={handleAddPlayer} player={player} key={player}></Player>)
        }
        </div>

        <div className="cart-container">
            <Cart playersCart={playersCart}></Cart>
        </div>
        </div>
    );
};

export default Shop;