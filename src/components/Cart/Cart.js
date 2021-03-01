import React from 'react';

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
        <div>
        <div>
            <h2>Team Summary</h2>
            <h3>Player selected: {props.playersCart.length}</h3>
            <h3>Total Price: $ {totalPrice}</h3>
        </div>

        <div>
            
        </div>
        </div>
    );
};

export default Cart;