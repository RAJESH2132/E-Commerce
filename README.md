# Full Stack E-Commerce Website  

This is a full-featured e-commerce platform built using the MERN stack. It allows users to browse products, filter and sort them, add items to the cart, and complete orders with multiple payment options. The project also includes an admin panel for managing products and orders.

## Previews  

- **User Website**: [Live Preview](https://e-commerce-frontend-inky-nu.vercel.app/)  
- **Admin Panel**: [Live Preview](https://e-commerce-admin-black.vercel.app/)  
- **GitHub Repository**: [E-Commerce Project](https://github.com/RAJESH2132/E-Commerce.git)  

## Project Structure  

```plaintext
ecommerce/
├── backend/
├── frontend/
└── admin/
```

## Features  

### User Website:  
- Home Page with latest collections and best sellers.  
- Product catalog with filtering by category and type, sorting by price, and search functionality.  
- Product details page with interactive gallery and size selection.  
- Add products to cart, manage cart items, and place orders with payment options (Stripe, Razorpay, or cash on delivery).  
- User authentication for secure login and signup.  
- Track orders with real-time status updates.  

### Admin Panel:  
- View, update, and manage order statuses.  
- Add and manage products with images, descriptions, categories, sizes, and prices.  

## Technologies Used  

### Frontend (User Website and Admin Panel)
- **React**: Component-based UI library for building user interfaces.  
- **Vite**: Fast development build tool for React applications.  
- **React Router**: Library for handling routing in single-page applications.  
- **Axios**: HTTP client for making API requests.  
- **React Toastify**: Provides notifications for user interactions.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  

### Backend  
- **Node.js**: JavaScript runtime for building the backend.  
- **Express.js**: Framework for creating RESTful APIs.  
- **MongoDB**: NoSQL database for storing user, product, and order data.  
- **Mongoose**: ODM library for interacting with MongoDB.  
- **JWT**: Token-based authentication for secure access control.  
- **Cloudinary**: Cloud-based image storage and management.  
- **Stripe & Razorpay**: Payment gateway integrations for secure transactions.  
- **CORS**: Middleware for handling cross-origin resource sharing.  
- **Bcrypt**: For hashing passwords securely.  

## Scripts  

### Backend  
- **Start the server**:  
  ```bash
  npm run server
  ```  

### Frontend and Admin  
- **Run the development server**:  
  ```bash
  npm run dev
  ```  
- **Build the production application**:  
  ```bash
  npm run build
  ```  
- **Preview the production build**:  
  ```bash
  npm run preview
  ```  

## Environment Variables  

### Backend (`backend/.env`):  
```plaintext
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```  

### Frontend and Admin (`frontend/.env` and `admin/.env`):  
```plaintext
VITE_BACKEND_URL=your_backend_url
```  

Replace the placeholders with your actual credentials.

## Installation and Setup  

### Prerequisites  
- Node.js (v16 or higher)  
- MongoDB (local or cloud instance)  

### Steps  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/RAJESH2132/E-Commerce.git
   cd E-Commerce
   ```  

2. **Install dependencies**:  
   - Backend:  
     ```bash
     npm install --prefix backend
     ```  
   - Frontend:  
     ```bash
     npm install --prefix frontend
     ```  
   - Admin:  
     ```bash
     npm install --prefix admin
     ```  

3. **Set up environment variables**:  
   - Configure the `.env` files in the respective directories as described above.

4. **Run the application**:  

   - **Development Mode**:  
     Start backend, frontend, and admin servers:  
     ```bash
     npm run server --prefix backend   # Runs on http://localhost:4000
     npm run dev --prefix frontend     # Runs on http://localhost:5173
     npm run dev --prefix admin        # Runs on http://localhost:5174
     ```  

   - **Production Mode**:  
     Build the frontend and admin:  
     ```bash
     npm run build --prefix frontend
     npm run build --prefix admin
     ```  
     Start the backend server:  
     ```bash
     npm run start --prefix backend
     ```  

5. **Access the application locally**:  
   - Backend API: `http://localhost:4000`  
   - Frontend (User Website): `http://localhost:5173`  
   - Admin Panel: `http://localhost:5174`  
