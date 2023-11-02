import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Jean Mathew S',
        email: 'mathew45@gmail.com',
        age: 6,
        location: 'New York, USA',
        mobile:'+47 8696 44959',
        order_count : "15",
        payment:"Credit - Card"
      },
      orders: [
        { orderId: 1, date: '2023-10-15', total: 50.00 },
        { orderId: 2, date: '2023-10-20', total: 75.50 },
        { orderId: 3, date: '2023-9-25', total: 56.00 },
        { orderId: 4, date: '2023-9-20', total: 74.50 },
        { orderId: 5, date: '2023-9-15', total: 86.00 },
        { orderId: 6, date: '2023-9-11', total: 84.50 },
      ],
    };
  }

  render() {
    const { user, orders } = this.state;

    return (
      <div className="user-profile">
        <div className="sidebar">
          <h2>User Information</h2>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{user.location}</td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td>{user.mobile}</td>
              </tr>
              <tr>
                <td>Payment Method </td>
                <td>{user.payment}</td>
              </tr>
              <tr>
                <td>Total Orders</td>
                <td>{user.order_count}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
