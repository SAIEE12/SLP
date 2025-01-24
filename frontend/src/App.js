import React, { useState } from "react";
import OrderList from "./components/OrderList";
import AddOrderForm from "./components/AddOrderForm";
import "./styles.css"; // Ensure this path matches your file structure

const App = () => {
  const [orders, setOrders] = useState([
    {
      orderNo: 1,
      name: "Manish",
      itemsOrdered: "Pickle",
      quantity: "250gm",
      itemsAmount: 540,
      deliveryCharges: 10,
      total: 550,
      paymentStatus: "Pending",
      deliveryStatus: "Pending",
    },
  ]);

  return (
    <div className="container">
      <h1>Srilalana </h1>
      <AddOrderForm setOrders={setOrders} orders={orders} />
      <OrderList orders={orders} />
    </div>
  );
};

export default App;



