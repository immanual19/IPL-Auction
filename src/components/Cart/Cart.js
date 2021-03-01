import React from 'react';
import './Cart.css';
const Cart = (props) => {
   // console.log(props.playersCart);
   const playersCart=props.playersCart;
   console.log(playersCart);
   let totalPrice=0;
   for(let i=0;i<playersCart.length;i++){
       const player=playersCart[i];
       totalPrice=totalPrice+player.base_price;
   }
    return (
        <div className="cart-item">
        <div>
            <h2>Team Summary</h2>
            <h3>Player selected: {playersCart.length}</h3>
            <h3>Total Price: $ {totalPrice}</h3>
        </div>

        <div className="selected-players">
        {
            playersCart.map(player=><p className="addedPlayer">Name: {player.name} <br/> Base Price: ${player.base_price}</p>)
        }
        </div>
        </div>
    );
};

export default Cart;