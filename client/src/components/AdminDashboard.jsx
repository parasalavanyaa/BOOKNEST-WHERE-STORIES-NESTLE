import React, { useState } from "react";
import { FaUser, FaStore, FaChartBar, FaBook, FaHome } from "react-icons/fa";
import BarChart from "./BarChart";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");

  const users = [
    { id: 1, name: "Lavanya", email: "lavanya@gmail.com" },
    { id: 1, name: "Ramya", email: "ramya@gmail.com" },
    { id: 1, name: "Rupa palagani", email: "rupasri34@gmail.com" },
  ];

  const sellers = [
    { id: 1, name: "BookWorld", email: "seller1@book.com" },
    { id: 2, name: "ReadersHub", email: "seller2@book.com" },
  ];

  const renderTable = () => {
    const data = activeTab === "users" ? users : sellers;
    const title = activeTab === "users" ? "👥 Users List" : "📚 Sellers List";

    return (
      <section style={styles.tableContainer}>
        <h3 style={styles.chartTitle}>{title}</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id}>
                <td style={styles.td}>{person.id}</td>
                <td style={styles.td}>{person.name}</td>
                <td style={styles.td}>{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>📚 BookNest</h2>

        <div
          style={{
            ...styles.navItem,
            backgroundColor: activeTab === "users" ? "#17a2b8" : "#495057",
          }}
          onClick={() => setActiveTab("users")}
        >
          <FaUser style={styles.icon} /> Users
        </div>

        <div
          style={{
            ...styles.navItem,
            backgroundColor: activeTab === "sellers" ? "#17a2b8" : "#495057",
          }}
          onClick={() => setActiveTab("sellers")}
        >
          <FaStore style={styles.icon} /> Sellers
        </div>

        <div style={styles.navItem} onClick={() => navigate("/")}>
          <FaHome style={styles.icon} /> Home
        </div>
      </aside>

      <main style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>Admin Dashboard</h1>
          <p style={styles.subtitle}>
            👋 Welcome, <b>admin@booknest.com</b>
          </p>
        </header>

        <section style={styles.grid}>
          <SummaryCard
            title="Total Users"
            value={users.length}
            icon={<FaUser />}
          />
          <SummaryCard
            title="Total Sellers"
            value={sellers.length}
            icon={<FaStore />}
          />
          <SummaryCard title="Orders Today" value={6} icon={<FaChartBar />} />
          <SummaryCard title="Books Listed" value={420} icon={<FaBook />} />
        </section>

        <section style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>📊 Platform Activity (Weekly)</h3>
          <BarChart />
        </section>

        {/* Only one table section now */}
        {renderTable()}
      </main>
    </div>
  );
};

const SummaryCard = ({ title, value, icon }) => (
  <div style={styles.card}>
    <div style={{ fontSize: "22px", marginBottom: "10px" }}>{icon}</div>
    <h4 style={{ margin: "5px 0" }}>{title}</h4>
    <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
  </div>
);

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  navItem: {
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
  },
  content: {
    flex: 1,
    padding: "40px",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "30px",
    color: "#333",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  chartContainer: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  chartTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  tableContainer: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    backgroundColor: "#343a40",
    color: "#fff",
    fontSize: "16px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontSize: "15px",
    color: "#333",
  },
};

export default AdminDashboard;
