A full-stack MERN application for seamless restaurant dine-in reservations with real-time slot availability, integrated food selection, and automated email confirmations.

🔗 Live Application: https://district-dine-app.onrender.com/

📦 Repository: https://github.com/shivanand-reddy1/restaurant-dinein-cp3-project

**📚 Table of Contents**

Overview

Features

Tech Stack

Folder Structure

Installation & Setup

Environment Variables

API Endpoints

Slot Booking Logic

Deployment

Contributing

License

**📌 Overview**

District Dine is a modern web-based dine-in reservation system built with the MERN stack.
It helps customers book tables with:

Preferred date & time slot

Food items selection

Guest count

Contact details

The backend ensures no duplicate bookings for the same time slot and sends instant email confirmations using SMTP.

**✨ Features**
👨‍🍽️ User Features

Book dine-in reservations with:

Name, Email, Phone Number

Guests Count

Food Selection (dropdown)

Date & Time Slot (9 AM – 6 PM)

Real-time slot availability check

Prevents double slot booking

Success page after reservation

Email confirmation to users

Clean UI created using React + TailwindCSS

🛠 Backend Features

RESTful API using Node.js + Express

MongoDB database with Mongoose models

Slot validation logic

Centralized error handling middleware

Email automation using Nodemailer (SMTP)

Fully CORS-configured architecture

**🧰 Tech Stack**
Frontend

React.js

React Router

Tailwind CSS

Axios

React Icons

Backend

Node.js

Express.js

MongoDB + Mongoose

Nodemailer

dotenv

CORS

📁 Folder Structure
<img width="264" height="528" alt="Screenshot 2025-11-14 103107" src="https://github.com/user-attachments/assets/137b8eba-b6db-47e5-b0e3-7d1e299f89a9" />

**🚀 Installation & Setup**
1️⃣ Clone Repository
git clone https://github.com/shivanand-reddy1/restaurant-dinein-cp3-project.git
cd restaurant-dinein-cp3-project

**📦 Backend Setup**
2️⃣ Install Dependencies
cd backend
npm install

3️⃣ Add Environment Variables

Create a file named config.env

PORT=5000
MONGO_URI=your_mongo_connection_string

# SMTP (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_app_password

FROM_EMAIL="District Dine <no-reply@districtdine.com>"
FRONTEND_URL=http://localhost:5173

**4️⃣ Start Backend**
npm start

**🖥 Frontend Setup**
5️⃣ Install Dependencies
cd ../frontend
npm install

**6️⃣ Run Frontend**
npm run dev

🤝 Contributing

**Contributions and pull requests are welcome!**
Guidelines:

Fork the repository

Create a new feature branch

Commit changes

Submit a PR


