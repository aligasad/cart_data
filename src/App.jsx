import './App.css';
import { FaCartPlus } from "react-icons/fa";
import CartPage from './CartPage';
import React, { useState } from 'react';

function App() {
  const [totalItems, setTotalItems] = useState(0); // state to track the total number of items

  // Function to update the total number of items when the quantity changes
  const handleItemChange = (quantity) => {
    setTotalItems(quantity);
  };

  return (
    <>
      <div id='Header' className=' h-20 bg-blue-500 flex justify-around items-center'>
        <h2 className='text-3xl font-semibold'>useReducer</h2>
        <div className='icon'>
          <FaCartPlus className='text-4xl  text-white' />
          <span className="badge">{totalItems}</span> {/* Displaying the totalItems count */}
        </div>
      </div>

      <CartPage handleItemChange={handleItemChange} />
    </>
  );
}

export default App;

