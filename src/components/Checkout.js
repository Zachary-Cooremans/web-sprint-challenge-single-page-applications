import React from 'react'

function Checkout(props) {
  const {details} = props;

 return (
  <div>
    <h2>Your Order Is Now Being Delivered</h2>
    <p>Name: {details.name}</p>
    <p>Size: {details.size}</p>
    <p>Gluten: {details.gluten}</p>
    <p>Special: {details.special}</p>
</div>
)}
export default Checkout