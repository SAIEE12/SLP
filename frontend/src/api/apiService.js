import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const getOrders = async () => {
  const response = await axios.get(`${API_BASE_URL}/orders/`);
  return response.data;
};

const createOrder = async (order) => {
  await axios.post(`${API_BASE_URL}/orders/`, order);
};

export default { getOrders, createOrder };
