import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginRole, setLoginRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("❌ Please enter both fields");
      return;
    }

    setRole(loginRole);
    alert(`✅ Logged in as ${loginRole.toUpperCase()}`);

    if (loginRole === "user") navigate("/books");
    else if (loginRole === "seller") navigate("/seller");
    else if (loginRole === "admin") navigate("/admin");
  };

  const styles = {
    wrapper: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#e8f4fd",
      fontFamily: "Segoe UI, sans-serif",
    },
    formSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fefefe",
      padding: "30px",
    },
    box: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    heading: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    tabs: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    tabBtn: {
      flex: 1,
      padding: "10px",
      margin: "0 5px",
      borderRadius: "6px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#ddd",
    },
    activeTab: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
    },
    imageSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#dff6ff",
    },
    owlImage: {
      width: "80%",
      maxWidth: "500px",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formSection}>
        <div style={styles.box}>
          <h2 style={styles.heading}>Login as {loginRole.toUpperCase()}</h2>
          <div style={styles.tabs}>
            {["user", "seller", "admin"].map((r) => (
              <button
                key={r}
                onClick={() => setLoginRole(r)}
                style={{
                  ...styles.tabBtn,
                  ...(loginRole === r ? styles.activeTab : {}),
                }}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>

      <div style={styles.imageSection}>
        <img
          src="https://thumbs.dreamstime.com/b/smart-owl-reading-book-fairy-tale-tell-story-animal-cartoon-illustration-children-world-day-352890541.jpg"
          alt="Smart Owl Reading Book"
          style={styles.owlImage}
        />
      </div>
    </div>
  );
};

export default Login;
