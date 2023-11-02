import React from 'react';

// Title outside the App component

const centerTextStyle = {
  textAlign: 'center',
};

function User() {
  // Sample data for the table
  const tableData = [
    {
      itemNo: 1,
      itemName: 'Madhavan',
      dateOfOrdered: '20231101',
      priceOf10Items: 'Chennai',
    },
    {
      itemNo: 2,
      itemName: 'Dharun',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Chennai',
    },
    {
      itemNo: 3,
      itemName: 'Raja',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Cuddalore',
    },
    {
      itemNo: 4,
      itemName: 'Sathish',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Dharmapuri',
    },
    {
      itemNo: 5,
      itemName: 'Nikitha',
      dateOfOrdered: '202331302',
      priceOf10Items: 'Chennai',
    },
    {
      itemNo: 6,
      itemName: 'Kanishka',
      dateOfOrdered: '20233102',
      priceOf10Items: 'Cuddlaore',
    },
    {
      itemNo: 7,
      itemName: 'Kalith',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Vellore',
    },
    {
      itemNo: 8,
      itemName: 'Murugan',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Arani',
    },
    {
      itemNo: 9,
      itemName: 'Vinoth',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Kancheepuram',
    },
    {
      itemNo: 10,
      itemName: 'Vimala',
      dateOfOrdered: '20331102',
      priceOf10Items: 'Pondicherry',
    },
    {
      itemNo: 11,
      itemName: 'Product B',
      dateOfOrdered: '20231102',
      priceOf10Items: 'Villupuram',
    },
    {
      itemNo: 12,
      itemName: 'Product B',
      dateOfOrdered: '20232202',
      priceOf10Items: 'Chennai'
    },
    // Add more items here as needed
  ];

  return (
    <div className="App">
      <h1 style={centerTextStyle}>User Details</h1>
      <div className="App-header">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.itemNo}</td>
                <td>{item.itemName}</td>
                <td>{item.dateOfOrdered}</td>
                <td>{item.priceOf10Items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default User;
