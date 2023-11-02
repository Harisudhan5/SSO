import React from 'react';

// Title outside the App component

const centerTextStyle = {
  textAlign: 'center',
};

function App() {
  // Sample data for the table
  const tableData = [
    {
      itemNo: 1,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-01',
      priceOf10Items: 50.0,
    },
    {
      itemNo: 2,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 60.0,
    },
    {
      itemNo: 3,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 80.0,
    },
    {
      itemNo: 4,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 74.0,
    },
    {
      itemNo: 5,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 67.0,
    },
    {
      itemNo: 6,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 64.0,
    },
    {
      itemNo: 7,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 85.0,
    },
    {
      itemNo: 8,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 65.0,
    },
    {
      itemNo: 9,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 52.0,
    },
    {
      itemNo: 10,
      itemName: 'Product A',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 80.0,
    },
    {
      itemNo: 11,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 90.0,
    },
    {
      itemNo: 12,
      itemName: 'Product B',
      dateOfOrdered: '2023-11-02',
      priceOf10Items: 90.0,
    },
    // Add more items here as needed
  ];

  return (
    <div className="App">
      <h1 style={centerTextStyle}>LIST OF OREDERS</h1>
      <div className="App-header">
        <table>
          <thead>
            <tr>
              <th>Item No</th>
              <th>Item Name</th>
              <th>Date of Ordered</th>
              <th>Price of 10 Items</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.itemNo}</td>
                <td>{item.itemName}</td>
                <td>{item.dateOfOrdered}</td>
                <td>${item.priceOf10Items.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default App;
