import React, { useState } from 'react';
import './form.css';

function OrderForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., send data to an API.
    console.log('Name:', name);
    console.log('Category:', category);
    console.log('Price:', price);
  };

  return (
    <div className='box'>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <div>   
        <input
          className='field'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Product Name '
          />
        </div>
        <div>
          <input
          className='field'
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder='Category'
          />
        </div>
        <div>
           <input className='field'
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder='Price '
          />
        </div>
        <button className="btn1" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OrderForm;
