import React from 'react'

function Checkout(props) {
  const {details} = props;

 return (
  <div>
    <h2>Your Order Is Now Being Delivered</h2>
    <p>Name: {details.name}</p>
    <p>Size: {details.size}</p>
    <p>Sauce: {details.sauce}</p>
    <p>Gluten: {details.gluten}</p>
    {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>Special: {details.special}</p>
</div>
)}
export default Checkout