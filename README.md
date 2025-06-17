Ratings & Reviews API Backend
A RESTful backend service for a Ratings and Reviews application, enabling users to submit reviews with optional star ratings and photo URLs for predefined products. Built with Node.js, Express, and Prisma ORM using a PostgreSQL database.
Features
Submit Reviews: Users can post reviews for products with optional star ratings (1-5) and image URLs.

Prevent Duplicates: Restricts users from submitting multiple reviews for the same product.

Fetch Reviews: Retrieve reviews and associated keywords for a specific product.

Fetch Products: Get all products and their reviews.

Dynamic User Creation: Add new users dynamically via API.

CORS Support: Enables cross-origin requests for frontend integration.

Tech Stack
Node.js with Express: Backend framework for API routes.

Prisma ORM: Database management with PostgreSQL.

PostgreSQL: Relational database for storing products, users, and reviews.

CORS: Enabled for cross-origin resource sharing.

Folder Structure

ratings-reviews-backend/
├── server.js # Entry point for the application
├── routes/ # API route definitions
│ ├── reviews.js # Review-related endpoints
│ ├── products.js # Product-related endpoints
│ └── users.js # User-related endpoints
├── controllers/ # Business logic for routes
│ ├── reviews.js # Review route handlers
│ ├── products.js # Product route handlers
│ └── users.js # User route handlers
├── prisma/ # Prisma configuration and schema
│ └── schema.prisma # Database schema definition
├── .env # Environment variables (not tracked)
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

Getting Started
Prerequisites
Node.js (v16 or higher)

PostgreSQL (v12 or higher)

npm or yarn

A PostgreSQL database instance (local or hosted)

Installation
Clone the Repository
bash

git clone https://github.com/your-username/ratings-reviews-backend.git
cd ratings-reviews-backend

Install Dependencies
bash

npm install

Configure Environment Variables
Create a .env file in the root directory with the following:
env

DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<dbname>?schema=public
PORT=5000

Replace <user>, <password>, and <dbname> with your PostgreSQL credentials and database name.

Set Up the Database
Initialize Prisma and apply the database schema:
bash

npx prisma init # Initializes Prisma (if not already done)
npx prisma migrate dev # Creates and applies database migrations
npx prisma generate # Generates Prisma client

The Prisma schema is defined in prisma/schema.prisma. Modify it as needed for your database structure.

Run the Server
Start the development server:
bash

npm start

The server will run on http://localhost:5000 (or the port specified in .env).
