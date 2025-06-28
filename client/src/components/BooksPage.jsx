import React, { useState } from "react";
import { useBooklist } from "../contexts/BooklistContext";

const books = [
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    price: "₹399",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSe7N2x_VwBIymJ4_pEi3jhQuqvYJTqZd34UY9AJoneWc3mvDVy6A6J7D4IAbizanJtDnKfUvjW-561mU_yi0zxarvXkCpo",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹499",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrPJxucAscBDhOkW4fjnkDhEmTqBgMAZzD_GL0J02tYfLH4wU_Us_zRtmS_IKoTvBdaE00QpTp20kKzj1U6UQQmRz9Fsi2fpYwrEGSx_tVab_Z-aUMZBbPrw",
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    price: "₹299",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoBy5xRKeXdBzfov_M2gb4OvXa5SciyLER7Jbd0xz8pORZaAQaA4otX-DM5KPw0X0t9Ogilol4kYC8jYSSfoP5iv8C2WcbCg54tsoPZbd5",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "₹389",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjg2Z0tD7eREK4xiS30wJgh9uptpWDYi3QKBMH0qSv8jfRojIWuaXHQUexZs5ZowJ7TMa-p0sLEvyONeUaKX-QpAb9T_1O8D_Epo_kbfI",
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles and Hector Garcia",
    price: "₹289",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPfpUuog8VhPkJIs9mvhBy-7SXNqQM7R5XLfR65HdQedJOhGubfiU9CnIRCDfOeEogKkQRVnatYqRjNths5kFnpr2SoCcM8q5TY17n5EM5vAR-cPY5vwWvPA",
  },
  {
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam and Arun Tiwari",
    price: "₹499",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwKNsn5bFaRU3ZjU-Ae4J3dJ8Oxw-aMWdkbpd-rSdAdIZGfhcESZpIXXQ6-PG6O2eodX0FdlTT7YSpW9BQecANCsMdcz4jc-yjjrBH5EyW",
  },
  {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    price: "₹269",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJYcoP-xAIYBqTnspCku0YMv7acsGOXHn2Y0HhQz9FD6Pt3wHQgmsQSnupEtO-kNN0d6Rig9FdvAKDWDC2834lON0dG_oxwut9UDDOYTXgAQQcb8GLyARpbw",
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    price: "₹319",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY9BS6lcDSdsioN5H2PNfU4Z1GmBUDiOOvgpn9HU1iCfSA5Mg0MiFZCYtpJRunbIDjgIiH-s29DLn52tYvfuC2r36F7Ssffo_6QLnPATVinKVto3ZJdR4A",
  },
  {
    title: "It Starts with Us",
    author: "Colleen Hoover",
    price: "₹239",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9mM_RSK-965ERA2JQ2S87K2HhUuP2uKR65cbJph2bayHGPgZR7umtJ4Iwy0P01r5PvXbeOPdZnXXSKVzBopR2MbIVwj-pcipSkwAKPAPS",
  },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    price: "₹429",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqg67UD4fdLmunQ_b2DeDmk5SrAOB0AIt1Ts3j4J04Ce_hwVqZzPolVqkfRops7fmsH8GyGyEog6QC8gXeaJNAhDcpKE4lUd7B47SboKJMfpMSk51qOkwOOQ",
  },
  {
    title: "The Magic of the Lost Temple",
    author: "Sudha Murty",
    price: "₹179",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzvEt2DnvTPCp3_lUUoGefXUJtbQuuQzSo_AdVx_G6guOiMnpJ1r9hnodNzzvCgiOb-cKgs4z_DltmSUSKG-WZQNaTaUKk9guXMrLQl_w",
  },
  {
    title: "Here, There and Everywhere",
    author: "Sudha Murty",
    price: "₹369",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTahc_8x0k-YtRSJUAngyViS0Y4jZk8ovKsaRehdIDZG1QFsr1pWCoR4eoB4wrVUHxre6fO2RTeLw1i8dmhGgsb7npdndazaMOlDXXCIRk",
  },
  {
    title: "Rich Dad Poor Dad",
    author: " Robert Kiyosaki and Sharon Lechtera",
    price: "₹369",
    image:
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: " J. D. Salinger",
    price: "₹299",
    image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    price: "₹399",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR5dks8OZi8TiLh5KdXC_RqagF_xWys_rjbFHxFLoZb8mFZ51y",
  },
  {
    title: "Pride and Prejudice",
    author: "Novel",
    price: "₹299",
    image:
      "https://m.media-amazon.com/images/I/712P0p5cXIL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹499",
    image:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "₹410",
    image:
      "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: "₹380",
    image:
      "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    price: "₹399",
    image:
      "https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    price: "₹199",
    image:
      "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    price: "₹299",
    image:
      "https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UF1000,1000_QL80_.jpg",
  },
];

const BooksPage = () => {
  const { addToWishlist, addToOrders } = useBooklist();

  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    pincode: "",
    location: "",
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderClick = (book) => {
    setSelectedBook(book);
    setShowForm(true);
    setOrderConfirmed(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addToOrders(selectedBook);
    setShowForm(false);
    setOrderConfirmed(true);
    setFormData({
      name: "",
      address: "",
      phone: "",
      pincode: "",
      location: "",
    });
    setTimeout(() => setOrderConfirmed(false), 3000); // auto hide after 3s
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          📚 Our Book Collection
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderBottom: "1px solid #ddd",
                }}
              />
              <div style={{ padding: "10px" }}>
                <h4 style={{ fontSize: "15px", margin: "5px 0" }}>
                  {book.title}
                </h4>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  by {book.author}
                </p>
                <p
                  style={{
                    color: "#28a745",
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "5px 0",
                  }}
                >
                  {book.price}
                </p>
                <button
                  onClick={() => addToWishlist(book)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                >
                  Wishlist
                </button>
                <button
                  onClick={() => handleOrderClick(book)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📦 Order Form Popup */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <h3>Order for: {selectedBook?.title}</h3>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <div style={{ marginTop: "15px", textAlign: "right" }}>
              <button
                onClick={() => setShowForm(false)}
                style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                style={{ ...buttonStyle, backgroundColor: "#28a745" }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Confirmation Popup */}
      {orderConfirmed && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          ✅ Order Confirmed!
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyle = {
  padding: "8px 14px",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  marginLeft: "10px",
  cursor: "pointer",
};

export default BooksPage;
