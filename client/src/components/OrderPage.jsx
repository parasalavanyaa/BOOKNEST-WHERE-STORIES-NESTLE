import React from "react";
import { useBooklist } from "../contexts/BooklistContext";

const OrderPage = () => {
  const { orders } = useBooklist();

  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f0f0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        🛒 Your Orders
      </h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders placed yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {orders.map((book, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <h4 style={{ margin: "10px 0 5px" }}>{book.title}</h4>
              <p style={{ fontSize: "14px" }}>by {book.author}</p>
              <p style={{ fontWeight: "bold", color: "#28a745" }}>
                {book.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
