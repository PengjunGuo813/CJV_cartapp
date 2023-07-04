/**********************************************
Task # 3
Full Name : Pengjun Guo
Student ID#: 139448229
Email : pguo9@myseneca.ca
Section : NAA

Authenticity Declaration: 
I declare this submission is the result of my own work and has not been. shared with any other student or 3rd party 
content provider. This submitted. 
piece of work is entirely of my own creation. 
***********************************************************************************************
Date: Jun 27, 2023
**********************************************/

import React, { useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Lamp',
    price: 25,
    quantity: 1,
    image: 'lamp.jpg',
  },
  {
    id: 2,
    name: 'Tape',
    price: 5,
    quantity: 1,
    image: 'tape.jpg',
  },
  {
    id: 3,
    name: 'Study Table',
    price: 100,
    quantity: 1,
    image: 'study-table.jpg',
  },
  {
    id: 4,
    name: 'Office Chair',
    price: 75,
    quantity: 1,
    image: 'office-chair.jpg',
  },
  {
    id: 5,
    name: 'Kettle',
    price: 20,
    quantity: 1,
    image: 'kettle.jpg',
  },
  {
    id: 6,
    name: 'Frying Pan',
    price: 15,
    quantity: 1,
    image: 'frying-pan.jpg',
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItem = (item) => {
    return (
      <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.name} />
        <div className="item-details">
          <div>{item.name}</div>
          <div>Price: ${item.price}</div>
          <div>Quantity: {item.quantity}</div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Shopping Cart by Pengjun Guo</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>Price: ${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <>
            {cartItems.map(renderCartItem)}
            <div className="subtotal">Subtotal: ${calculateSubtotal()}</div>
            <button onClick={emptyCart}>Empty Cart</button>
            <button className="checkout-button">Checkout</button>
          </>
        )}
      </div>
      <footer>&copy;  Pengjun Guo</footer>
    </div>
  );
}

export default App;
