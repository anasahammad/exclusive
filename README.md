Exclusive - E-commerce Website
Exclusive is a fully functional e-commerce website built with TypeScript and the MERN stack (MongoDB, Express.js, React, and Node.js). The project features a Stripe payment gateway, Firebase authentication, product reviews, wishlists, carts, and more.

Live Demo
Check out the live project here: Exclusive Website

Features
Stripe Payment Integration: Secure and easy-to-use payment gateway.
Firebase Authentication: Users can log in and register using Firebase.
Wishlist: Products can be added to a wishlist, stored in localStorage.
Cart System: Add products to the cart and save them in localStorage.
Product Reviews: Users can leave reviews for products.
Product Tracking: Users can track their purchased products.
Admin Panel: Manage products, orders, and users (Admin-specific routes).
Tech Stack
Frontend:

React (TypeScript)
Tailwind CSS
Material UI (for tables)
ShadCN (for dropdown menus)
Backend:

Node.js
Express.js
MongoDB (NoSQL Database)
Other Libraries:

React Hook Form
React Loading Spinner
React Moment.js
React Hot Toast
React Dropzone (for file uploads)
React Slick Carousel (for product sliders)
Axios (for API requests)
CORS
Cookie Parser
JWT (for authentication)
UUID (for unique IDs)
Installation
Follow the steps below to set up and run the project locally.

Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB (running locally or via MongoDB Atlas)
Stripe account for payment integration
Firebase account for authentication
1. Clone the repository
bash
Copy code
git clone https://github.com/YOUR_GITHUB_USERNAME/exclusive-ecommerce.git
cd exclusive-ecommerce
2. Install dependencies
Navigate to both the client and server directories and install the required packages:

For the Frontend (React App):
bash
Copy code
cd client
npm install
For the Backend (Node.js API):
bash
Copy code
cd ../server
npm install
3. Set up environment variables
Create a .env file in the server directory and add the following:

bash
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Create another .env.local file in the client directory and add:

bash
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
4. Running the project
For the Frontend (React App):
bash
Copy code
cd client
npm start
The frontend will be running at http://localhost:3000.

For the Backend (Node.js API):
bash
Copy code
cd ../server
npm run dev
The backend will be running at http://localhost:5000.

5. Additional Configuration
Firebase Authentication: Set up Firebase for user authentication. Follow the Firebase documentation to configure the app.
Stripe Payments: Configure your Stripe account for payment integration. Follow the Stripe documentation to get your secret key.
6. Build for Production
To create a production build, use the following commands:

Frontend:
bash
Copy code
cd client
npm run build
Backend:
bash
Copy code
cd ../server
npm start
