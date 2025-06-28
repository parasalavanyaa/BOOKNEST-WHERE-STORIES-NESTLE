import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ role, setRole }) => {
  const handleLogout = () => {
    setRole("guest");
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 30px",
      backgroundColor: "#343a40",
      color: "#fff",
    },
    logo: {
      margin: 0,
      fontWeight: "bold",
    },
    link: {
      marginLeft: "15px",
      textDecoration: "none",
      color: "#fff",
      fontWeight: "bold",
    },
    right: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <nav style={styles.navbar}>
      <h3 style={styles.logo}>📚 BookNest</h3>
      <div style={styles.right}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {role === "user" && (
          <>
            <Link to="/books" style={styles.link}>
              Books
            </Link>
            <Link to="/wishlist" style={styles.link}>
              Wishlist
            </Link>
            <Link to="/orders" style={styles.link}>
              My Orders
            </Link>
            <Link to="/logout" style={styles.link} onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
        {role === "seller" && (
          <>
            <Link to="/seller" style={styles.link}>
              Dashboard
            </Link>
            <Link to="/addbook" style={styles.link}>
              Add Book
            </Link>
            <Link to="/logout" style={styles.link} onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
        {role === "admin" && (
          <>
            <Link to="/admin" style={styles.link}>
              Admin Dashboard
            </Link>

            <Link to="/logout" style={styles.link} onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
        {role === "guest" && (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
