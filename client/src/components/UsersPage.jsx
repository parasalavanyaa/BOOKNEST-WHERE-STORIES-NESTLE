import React from "react";

const dummyUsers = [
  {
    id: 1,
    name: "Lavanya",
    email: "lavanya@example.com",
  },
  {
    id: 2,
    name: "Praneeth",
    email: "praneeth@example.com",
  },
  {
    id: 3,
    name: "Sita",
    email: "sita@example.com",
  },
];

const UsersPage = () => {
  const handleDelete = (id) => {
    alert(`Delete user with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`Viewing orders for user ID: ${id}`);
    // Later navigate to popup or detailed orders page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👥 Registered Users</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>UserID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>user-{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  style={styles.viewBtn}
                  onClick={() => handleView(user.id)}
                >
                  View
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(user.id)}
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
    backgroundColor: "#17a2b8",
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UsersPage;
