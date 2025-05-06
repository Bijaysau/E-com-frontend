# 🛍️ Worncom E-Commerce Frontend

Welcome to the **Worncom E-Commerce Frontend**, a sleek and modern web interface for your online store. Built with **React**, **Vite**, and **Tailwind CSS**, this frontend handles everything from product discovery to checkout — including multi-payment support with Razorpay, Stripe, and Cash on Delivery.

---

## ✨ Features

- 🏠 **Home Page** – Hero banner, best sellers, latest collection, and more.
- 🛒 **Product Listing & Details** – Browse collections and view detailed product info.
- 🛍️ **Cart Functionality** – Add, remove, and update cart items with total calculation.
- 🔐 **User Login** – Simple login to manage orders and place purchases.
- - 🔐 **User Sign Up** – Simple Sign Up to manage orders and place purchases.
- 📦 **Order Placement** – Seamless checkout experience with address form.
- 💳 **Payment Integration** – Support for:
  - Razorpay
  - Stripe
  - Cash on Delivery
- 📬 **Newsletter & Contact** – Collect leads and enable customer inquiries.
- 📦 **Order History** – View previously placed orders.
- ✅ **Order Verification** – Basic order verification step after checkout.
- 🔔 **Notifications** – Toast-based real-time alerts and updates.

---

## 🧾 Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v7
- **State Management:** React Context API
- **Notifications:** react-toastify, react-hot-toast
- **Payment:** Razorpay, Stripe, Cash on Delivery

---

## 📁 Project Structure

```bash
frontend/
├── public/
│   ├── d.png
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── items.images/        # Product images and icons
│   │   └── assets.js            # Asset references
│   │
│   ├── components/              # Reusable components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProduct.jsx
│   │   ├── Searchbar.jsx
│   │   └── Tittle.jsx
│   │
│   ├── context/
│   │   └── ShopContext.jsx      # Global state provider
│   │
│   ├── pages/                   # Route pages
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Product.jsx
│   │   └── Verify.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project Locally

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🌐 Routes (React Router v7)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/collection" element={<Collection />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product/:productId" element={<Product />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<Login />} />
  <Route path="/place-order" element={<PlaceOrder />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/verify" element={<Verify />} />
</Routes>
```

---

## ⚙️ Environment Variables (`.env`)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📦 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## 🔐 Payments

- ✅ **Razorpay** – Fast and secure UPI/Cards/Netbanking
- ✅ **Stripe** – International card support
- ✅ **Cash on Delivery** – Traditional pay-on-delivery

*Integration logic lives inside PlaceOrder and Verify components.*

---

## 💡 Future Enhancements

- 👤 User registration & profile management
- 📊 Analytics & product insights
- 🗂️ Product filters & sorting
- 🔒 Admin dashboard integration

---

## 🙌 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change.

---

## 🌍 Live Demo

Check out the live version of the app:

🔗 [Click here to open Worncom E-Commerce Frontend](https://e-com-frontend-sandy.vercel.app)

---

Thanks for checking out the **Worncom E-Commerce Frontend**! 🚀
