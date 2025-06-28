import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const exploreRef = useRef(null);

  const handleExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      backgroundImage:
        "url('https://m.media-amazon.com/images/I/61cZWUTei2L._AC_UF894,1000_QL80_.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "0 20px",
    },
    logo: {
      width: "80px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
      textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
    },
    subtitle: {
      fontSize: "20px",
      marginBottom: "30px",
      textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
      color: "#ffea00",
    },
    buttonContainer: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    button: {
      padding: "12px 25px",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    exploreButton: {
      backgroundColor: "#28a745",
    },
    popup: {
      marginTop: "30px",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "15px 25px",
      borderRadius: "12px",
      maxWidth: "600px",
      fontSize: "18px",
      animation: "fadeInUp 1.5s ease-out",
    },
    exploreSection: {
      padding: "60px 20px",
      backgroundColor: "#f9f9f9",
      color: "#333",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "32px",
      marginBottom: "30px",
      color: "#222",
    },
    cardGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      marginTop: "30px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      width: "280px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
      animation: "fadeInCard 0.7s ease",
    },
    cardTitle: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#007bff",
    },
    cardText: {
      fontSize: "16px",
      color: "#444",
    },
  };

  const animations = `
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInCard {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

  return (
    <>
      <style>{animations}</style>

      {/* Hero Section */}
      <div style={styles.wrapper}>
        <img
          src="https://i.pinimg.com/474x/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg"
          alt="BookNest Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>📚 BookNest</h1>
        <p style={styles.subtitle}>Where Stories Nestle ✨</p>

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate("/register")}>
            Register
          </button>
          <button style={styles.button} onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            style={{ ...styles.button, ...styles.exploreButton }}
            onClick={handleExplore}
          >
            Explore
          </button>
        </div>

        <div style={styles.popup}>
          Unlock a world of stories with BookNest — your cozy digital library.
        </div>
      </div>

      {/* Explore Section */}
      <div ref={exploreRef} style={styles.exploreSection}>
        <h2 style={styles.sectionTitle}>✨ Why Choose BookNest?</h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📖 For Book Lovers</h3>
            <p style={styles.cardText}>
              Discover thousands of books, track orders, and build your dream
              bookshelf.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏪 For Sellers</h3>
            <p style={styles.cardText}>
              List your books, manage inventory, and reach thousands of
              customers easily.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🛡️ For Admins</h3>
            <p style={styles.cardText}>
              Monitor platform activity with dashboards and manage users
              efficiently.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📬 Contact Us</h3>
            <p style={styles.cardText}>
              Email: support@booknest.com <br />
              Phone: +91-9876543210
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
