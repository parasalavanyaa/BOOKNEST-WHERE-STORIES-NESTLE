import React, { useState } from "react";
import { FaTrash, FaEdit, FaPlus, FaBoxOpen } from "react-icons/fa";

const backgroundImage =
  'url("https://media.istockphoto.com/id/638345642/photo/blurred-library-or-bookshop-background.jpg?s=612x612&w=0&k=20&c=24G7wydxFcSKMr2wVEwlyFsvAKr8AaPARYcJX78EKog=")';

// 🔹 Styles
const styles = {
  table: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    borderCollapse: "collapse",
  },
  cell: {
    padding: "14px",
    border: "1px solid #ccc",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  saveButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    marginTop: "10px",
    cursor: "pointer",
  },
  input: {
    margin: "6px",
    padding: "10px",
    width: "200px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  formContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

const SellerDashboard = () => {
  const [books, setBooks] = useState([
    {
      id: "BK001",
      title: "The Psychology of Money",
      price: "₹299",
      warranty: "6 months",
      image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    },
    {
      id: "BK002",
      title: "Rich Dad Poor Dad",
      price: "₹350",
      warranty: "1 year",
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    warranty: "",
    image: "",
  });

  const handleAddProduct = () => {
    const { id, title, price, warranty, image } = formData;
    if (!id || !title || !price || !warranty || !image) {
      alert("Please fill in all fields!");
      return;
    }
    setBooks([...books, formData]);
    setFormData({ id: "", title: "", price: "", warranty: "", image: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        📦 Seller Dashboard
      </h2>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <SummaryCard
          title="Total Products"
          value={books.length}
          icon={<FaBoxOpen />}
        />
        <SummaryCard title="Orders" value={42} icon={<FaBoxOpen />} />
        <SummaryCard title="Earnings" value="₹12,340" icon={<FaBoxOpen />} />
      </div>

      {/* Add Product Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button style={styles.addButton} onClick={() => setShowForm(!showForm)}>
          <FaPlus /> {showForm ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {/* Product Form */}
      {showForm && (
        <div style={styles.formContainer}>
          <input
            placeholder="Book ID"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            style={styles.input}
          />
          <input
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            style={styles.input}
          />
          <input
            placeholder="Warranty"
            value={formData.warranty}
            onChange={(e) =>
              setFormData({ ...formData, warranty: e.target.value })
            }
            style={styles.input}
          />
          <input
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <button style={styles.saveButton} onClick={handleAddProduct}>
            Save Product
          </button>
        </div>
      )}

      {/* Product Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr style={{ backgroundColor: "#444", color: "#fff" }}>
              <th style={styles.cell}>Image</th>
              <th style={styles.cell}>Book Name</th>
              <th style={styles.cell}>Book ID</th>
              <th style={styles.cell}>Price</th>
              <th style={styles.cell}>Warranty</th>
              <th style={styles.cell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book.id}
                style={{
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.85)",
                }}
              >
                <td style={styles.cell}>
                  <img
                    src={book.image}
                    alt={book.title}
                    style={{ width: "60px", borderRadius: "4px" }}
                  />
                </td>
                <td style={styles.cell}>{book.title}</td>
                <td style={styles.cell}>{book.id}</td>
                <td style={styles.cell}>{book.price}</td>
                <td style={styles.cell}>{book.warranty}</td>
                <td style={styles.cell}>
                  <FaEdit
                    style={{
                      color: "blue",
                      marginRight: "12px",
                      cursor: "pointer",
                    }}
                    title="Edit"
                  />
                  <FaTrash
                    style={{ color: "red", cursor: "pointer" }}
                    title="Delete"
                    onClick={() => handleDelete(book.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, icon }) => (
  <div
    style={{
      background: "rgba(255, 255, 255, 0.7)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      textAlign: "center",
      minWidth: "160px",
      color: "#333",
    }}
  >
    <div style={{ fontSize: "22px", marginBottom: "10px" }}>{icon}</div>
    <h4 style={{ margin: "5px 0" }}>{title}</h4>
    <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
  </div>
);

export default SellerDashboard;
