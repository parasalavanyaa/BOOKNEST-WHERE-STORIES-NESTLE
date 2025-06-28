import React from "react";

const dummyItems = [
  {
    id: "BK001",
    title: "Atomic Habits",
    image:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    warranty: "6 Months",
    price: "₹499",
  },
  {
    id: "BK002",
    title: "The Power of Now",
    image:
      "https://m.media-amazon.com/images/I/81p9zBBrxIL._AC_UF1000,1000_QL80_.jpg",
    warranty: "1 Year",
    price: "₹349",
  },
];

const SellerItemsPage = () => {
  const handleDelete = (id) => {
    alert(`Deleted item ${id}`);
    // Later: Call API to delete from DB
  };

  return (
    <div style={styles.wrapper}>
      <h2>📚 My Products</h2>
      <div style={styles.grid}>
        {dummyItems.map((book) => (
          <div key={book.id} style={styles.card}>
            <img src={book.image} alt={book.title} style={styles.image} />
            <h3>{book.title}</h3>
            <p>
              <b>ID:</b> {book.id}
            </p>
            <p>
              <b>Warranty:</b> {book.warranty}
            </p>
            <p>
              <b>Price:</b> {book.price}
            </p>
            <button onClick={() => handleDelete(book.id)} style={styles.delete}>
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "30px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "220px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fafafa",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  delete: {
    marginTop: "10px",
    padding: "6px 12px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default SellerItemsPage;
