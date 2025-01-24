import React, { useState } from "react";

const AddOrderForm = ({ setOrders, orders }) => {
  // State for the form inputs
  const [formData, setFormData] = useState({
    orderNo: "",
    name: "",
    itemsOrdered: "",
    quantity: "",
    itemsAmount: "",
    deliveryCharges: "",
    total: "",
    paymentStatus: "",
    deliveryStatus: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.orderNo ||
      !formData.name ||
      !formData.itemsOrdered ||
      !formData.quantity ||
      !formData.itemsAmount ||
      !formData.deliveryCharges ||
      !formData.total ||
      !formData.paymentStatus ||
      !formData.deliveryStatus
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Add the new order to the existing orders
    setOrders([...orders, formData]);

    // Reset the form
    setFormData({
      orderNo: "",
      name: "",
      itemsOrdered: "",
      quantity: "",
      itemsAmount: "",
      deliveryCharges: "",
      total: "",
      paymentStatus: "",
      deliveryStatus: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Order</h2>
      <label>Order No:</label>
      <input
        type="text"
        name="orderNo"
        value={formData.orderNo}
        onChange={handleInputChange}
      />
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <label>Items Ordered:</label>
      <input
        type="text"
        name="itemsOrdered"
        value={formData.itemsOrdered}
        onChange={handleInputChange}
      />
      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />
      <label>Items Amount:</label>
      <input
        type="text"
        name="itemsAmount"
        value={formData.itemsAmount}
        onChange={handleInputChange}
      />
      <label>Delivery Charges:</label>
      <input
        type="text"
        name="deliveryCharges"
        value={formData.deliveryCharges}
        onChange={handleInputChange}
      />
      <label>Total:</label>
      <input
        type="text"
        name="total"
        value={formData.total}
        onChange={handleInputChange}
      />
      <label>Payment Status:</label>
      <input
        type="text"
        name="paymentStatus"
        value={formData.paymentStatus}
        onChange={handleInputChange}
      />
      <label>Delivery Status:</label>
      <input
        type="text"
        name="deliveryStatus"
        value={formData.deliveryStatus}
        onChange={handleInputChange}
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default AddOrderForm;
