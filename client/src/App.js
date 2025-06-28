import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import BooksPage from "./components/BooksPage";
import WishlistPage from "./components/WishlistPage";
import MyOrdersPage from "./components/MyOrdersPage";
import OrderPage from "./components/OrderPage";
import Login from "./components/Login";
import Register from "./components/register";
import Logout from "./components/Logout";

import SellerDashboard from "./components/SellerDashboard";
import AddBookPage from "./components/AddBookPage";
import SellerItemsPage from "./components/SellerItemsPage";

import AdminDashboard from "./components/AdminDashboard";
import UsersPage from "./components/UsersPage";
import SellersPage from "./components/SellersPage";
import UserOrdersPopup from "./components/UserOrdersPopup";

import { BooklistProvider } from "./contexts/BooklistContext";

const AppWrapper = () => {
  const [role, setRole] = useState("guest");
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar role={role} setRole={setRole} />}
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />

        {/* 👤 User Routes */}
        {role === "user" ? (
          <>
            <Route path="/books" element={<BooksPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/order/details" element={<OrderPage />} />
          </>
        ) : (
          // ⛔ Unauthorized users redirected
          <>
            <Route path="/books" element={<Navigate to="/login" />} />
            <Route path="/wishlist" element={<Navigate to="/login" />} />
            <Route path="/orders" element={<Navigate to="/login" />} />
            <Route path="/order/details" element={<Navigate to="/login" />} />
          </>
        )}

        {/* 🛒 Seller Routes */}
        {role === "seller" ? (
          <>
            <Route path="/seller" element={<SellerDashboard />} />
            <Route path="/addbook" element={<AddBookPage />} />
            <Route path="/seller/items" element={<SellerItemsPage />} />
          </>
        ) : (
          <>
            <Route path="/seller" element={<Navigate to="/login" />} />
            <Route path="/addbook" element={<Navigate to="/login" />} />
            <Route path="/seller/items" element={<Navigate to="/login" />} />
          </>
        )}

        {/* 🧑‍💼 Admin Routes */}
        {role === "admin" ? (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/sellers" element={<SellersPage />} />
            <Route path="/admin/orders/:userId" element={<UserOrdersPopup />} />
          </>
        ) : (
          <>
            <Route path="/admin" element={<Navigate to="/login" />} />
            <Route path="/admin/users" element={<Navigate to="/login" />} />
            <Route path="/admin/sellers" element={<Navigate to="/login" />} />
            <Route
              path="/admin/orders/:userId"
              element={<Navigate to="/login" />}
            />
          </>
        )}

        {/* 🧭 Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => (
  <BooklistProvider>
    <Router>
      <AppWrapper />
    </Router>
  </BooklistProvider>
);

export default App;
