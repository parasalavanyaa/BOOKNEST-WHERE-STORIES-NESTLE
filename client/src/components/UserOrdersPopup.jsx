import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const dummyOrders = [
  {
    id: "ORD001",
    productName: "Atomic Habits",
    address: "123 Green Lane, NY",
    buyer: "John Doe",
    seller: "Akhil",
    bookingDate: "2025-06-22",
    deliverBy: "2025-06-25",
    warranty: "6 Months",
    price: "₹499",
    status: "Delivered",
  },
  {
    id: "ORD002",
    productName: "The Power of Now",
    address: "45 West Drive, LA",
    buyer: "John Doe",
    seller: "Deepa",
    bookingDate: "2025-06-15",
    deliverBy: "2025-06-20",
    warranty: "1 Year",
    price: "₹349",
    status: "Shipped",
  },
];

const UserOrdersPopup = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClose = () => {
    navigate("/admin/users");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.modal}>
        <h2>User ID: {userId} - Orders</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Buyer</th>
              <th>Seller</th>
              <th>Address</th>
              <th>Booking Date</th>
              <th>Deliver By</th>
              <th>Warranty</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.productName}</td>
                <td>{order.buyer}</td>
                <td>{order.seller}</td>
                <td>{order.address}</td>
                <td>{order.bookingDate}</td>
                <td>{order.deliverBy}</td>
                <td>{order.warranty}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleClose} style={styles.closeBtn}>
          ❌ Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
  },
};

export default UserOrdersPopup;
