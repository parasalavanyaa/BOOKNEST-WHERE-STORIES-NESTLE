import React, { useState } from "react";

const AddBookPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [warranty, setWarranty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `📘 Book Added:\nTitle: ${title}\nPrice: ${price}\nWarranty: ${warranty}`
    );
    setTitle("");
    setPrice("");
    setWarranty("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2 style={styles.heading}>➕ Add New Book</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="📚 Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="text"
              placeholder="💰 Price (e.g., ₹299)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="text"
              placeholder="⏳ Warranty (e.g., 6 months)"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              ✅ Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      'url("https://thumbs.dreamstime.com/b/blurred-bookshelf-many-old-books-book-shop-library-162908984.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(3px)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    maxWidth: "500px",
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddBookPage;
