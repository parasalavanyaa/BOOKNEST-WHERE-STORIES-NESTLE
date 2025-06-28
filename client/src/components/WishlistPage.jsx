import React from "react";
import { useBooklist } from "../contexts/BooklistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useBooklist();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/474x/65/eb/77/65eb77580cdda0a48e5ff35e24c3e210.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          💖 Your Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p style={{ textAlign: "center" }}>Your wishlist is empty.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
            }}
          >
            {wishlist.map((book, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderBottom: "1px solid #ddd",
                  }}
                />
                <div style={{ padding: "10px" }}>
                  <h4 style={{ fontSize: "15px", margin: "5px 0" }}>
                    {book.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#555",
                      margin: "2px 0",
                    }}
                  >
                    by {book.author}
                  </p>
                  <p
                    style={{
                      color: "#28a745",
                      fontWeight: "bold",
                      fontSize: "14px",
                      margin: "5px 0",
                    }}
                  >
                    {book.price}
                  </p>
                  <button
                    onClick={() => removeFromWishlist(book.title)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
