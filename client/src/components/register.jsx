import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = formData;

    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    alert(`✅ Registered as ${role.toUpperCase()}!`);
    navigate("/login");
  };

  const styles = {
    wrapper: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#f0f9ff",
      fontFamily: "Arial, sans-serif",
    },
    formSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.9)",
      padding: "40px",
    },
    formContainer: {
      width: "100%",
      maxWidth: "400px",
      background: "#ffffff",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    },
    heading: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
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
      backgroundColor: "#e9ecef",
    },
    activeTab: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
    },
    error: {
      color: "red",
      fontSize: "14px",
      textAlign: "center",
      marginBottom: "10px",
    },
    imageSection: {
      flex: 1,
      background: "#dff6ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
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
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Register as {role.toUpperCase()}</h2>
          <div style={styles.tabs}>
            {["user", "seller", "admin"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={{
                  ...styles.tabBtn,
                  ...(role === r ? styles.activeTab : {}),
                }}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={formData.confirm}
              onChange={handleChange}
              required
              style={styles.input}
            />

            {error && <p style={styles.error}>⚠️ {error}</p>}

            <button type="submit" style={styles.button}>
              Register
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

export default Register;
