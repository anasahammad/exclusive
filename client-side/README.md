# Exclusive - E-Commerce Website

**Exclusive** is a fully functional e-commerce website built with TypeScript and the MERN stack (MongoDB, Express.js, React, and Node.js). The project features a Stripe payment gateway, Firebase authentication, product reviews, wishlists, carts, and more.

## Live Demo

Check out the live project here: [Exclusive Website](https://exclusive-1.web.app/)

## Features

- **Stripe Payment Integration**: Secure and easy-to-use payment gateway.
- **Firebase Authentication**: Users can log in and register using Firebase.
- **Wishlist**: Products can be added to a wishlist, stored in localStorage.
- **Cart System**: Add products to the cart and save them in localStorage.
- **Product Reviews**: Users can leave reviews for products.
- **Product Tracking**: Users can track their purchased products.
- **Admin Panel**: Manage products, orders, and users (Admin-specific routes).

## Tech Stack

**Frontend:**

- React (TypeScript)
- Tailwind CSS
- Material UI (for tables)
- ShadCN (for dropdown menus)

**Backend:**

- Node.js
- Express.js
- MongoDB (NoSQL Database)

**Other Libraries:**

- React Hook Form
- React Loading Spinner
- React Moment.js
- React Hot Toast
- React Dropzone (for file uploads)
- React Slick Carousel (for product sliders)
- Axios (for API requests)
- CORS
- Cookie Parser
- JWT (for authentication)
- UUID (for unique IDs)

## Installation

Follow the steps below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB (running locally or via MongoDB Atlas)
- Stripe account for payment integration
- Firebase account for authentication

### 1. Clone the Repository

```bash
git https://github.com/anasahammad/exclusive
cd exclusive

## Installation

### 2. Install Dependencies

To install the required packages for both the frontend and backend parts of your project, follow these steps:

#### For the Frontend (React App):

1. **Navigate to the frontend directory:**

   ```bash
   cd client

   npm install

   cd ../server

   npm install

   ### 3. Set Up Environment Variables

You need to set up environment variables for both the frontend and backend. Create `.env` files in the appropriate directories and add the required variables.

#### Backend (Node.js API)

1. Create a `.env` file in the `server` directory:

   ```bash
   cd server
   touch .env

2. Add the following environment variables to the .env file:

 PORT=5000
 MONGO_URI=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret
 STRIPE_SECRET_KEY=your_stripe_secret_key

 ###Frontend (React App)

 1. Create a .env.local file in the client directory:

 cd ../client
touch .env.local

2. Add the following environment variables to the .env.local file:

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

### 3. Running the Project

### For the Frontend (React App):

cd client
npm start

The frontend will be running at http://localhost:5173.

### For the Backend (Node.js API):

cd ../server
npm run dev
The backend will be running at http://localhost:5000.

### 5.  Additional Configuration

-**Firebase Authentication**:  Set up Firebase for user authentication. Follow the Firebase documentation to configure the app.

-**Stripe Payments**:  Configure your Stripe account for payment integration. Follow the Stripe documentation to get your secret key.

### 6. Build for Production

To create a production build, use the following commands:

#Frontend
cd client
npm run build

#Backend
cd ../server
npm start


