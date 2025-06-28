import React from "react";
import { useBooklist } from "../contexts/BooklistContext";

const MyOrdersPage = () => {
  const { orders, removeOrder } = useBooklist();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/55/cf/de/55cfde4a933709750bd3ced202108d2c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>🧾 My Orders</h2>

        {orders.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            You haven't ordered any books yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {orders.map((book, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <h4 style={{ marginTop: "10px", fontSize: "15px" }}>
                  {book.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#555" }}>{book.author}</p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#28a745",
                    fontSize: "14px",
                  }}
                >
                  {book.price}
                </p>
                <p style={{ fontSize: "12px", color: "#888" }}>✔️ Ordered</p>

                <button
                  onClick={() => removeOrder(book.title)}
                  style={{
                    marginTop: "10px",
                    padding: "6px 12px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Cancel Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;
