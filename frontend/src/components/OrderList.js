import React from "react";

const OrderList = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p>No orders are available.</p>;
  }

  return (
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Name</th>
            <th>Items Ordered</th>
            <th>Quantity</th>
            <th>Items Amount</th>
            <th>Delivery Charges</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderNo}</td>
              <td>{order.name}</td>
              <td>{order.itemsOrdered}</td>
              <td>{order.quantity}</td>
              <td>{order.itemsAmount}</td>
              <td>{order.deliveryCharges}</td>
              <td>{order.total}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
