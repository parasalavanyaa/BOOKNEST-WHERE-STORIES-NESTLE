import React from "react";

const dummySellers = [
  {
    id: 1,
    name: "Akhil",
    email: "akhil@seller.com",
  },
  {
    id: 2,
    name: "Deepa",
    email: "deepa@seller.com",
  },
  {
    id: 3,
    name: "Nikhil",
    email: "nikhil@seller.com",
  },
];

const SellersPage = () => {
  const handleDelete = (id) => {
    alert(`Delete seller with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`Viewing products of seller ID: ${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛍️ Registered Sellers</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Seller ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {dummySellers.map((seller, index) => (
            <tr key={seller.id}>
              <td>{index + 1}</td>
              <td>seller-{seller.id}</td>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>
                <button
                  style={styles.viewBtn}
                  onClick={() => handleView(seller.id)}
                >
                  View
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(seller.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  viewBtn: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SellersPage;
