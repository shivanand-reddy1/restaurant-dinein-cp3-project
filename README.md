District Dine is a full-stack MERN application designed to simplify restaurant table reservations, food selection, and slot-based booking management.
The system ensures that no two users can book the same time slot and supports email confirmations using SMTP.

📌 Features
🧑‍💻 User Features

Book a dine-in reservation with:

Name, Email, Phone

Number of Guests

Food Selection (Dropdown)

Date & Time Slot (9 AM – 6 PM)

Slot-wise booking system (prevents double booking)

Email confirmation on successful reservation

Clean UI made with React + TailwindCSS

⚙️ Admin / Backend Features

REST API built using Node.js + Express

MongoDB database for reservations & user data

Slot availability validation

Error handling middleware

SMTP support for sending confirmation emails

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

Tailwind CSS

React Icons

Backend

Node.js

Express.js

MongoDB (Mongoose)

Nodemailer (SMTP Emails)

dotenv & cors

📁 Folder Structure
restaurant-dinein-cp3-project/
│
├── backend/
│   ├── controller/
│   │   ├── reservationController.js
│   │   └── userController.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── middlewares/
│   │   └── error.js
│   ├── models/
│   │   ├── reservation.js
│   │   └── user.js
│   ├── routes/
│   │   ├── reservationRoute.js
│   │   └── userRoute.js
│   ├── utils/
│   │   └── sendEmails.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WhoAreWe.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── Success.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── assets/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── config.env
├── package.json
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/shivanand-reddy1/restaurant-dinein-cp3-project.git
cd restaurant-dinein-cp3-project

⚙ Backend Setup
2️⃣ Install Backend Dependencies
cd backend
npm install

3️⃣ Create config.env
PORT=5000
MONGO_URI=your_mongo_url

# SMTP (Example for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

FROM_EMAIL="District Dine <no-reply@districtdine.com>"
FRONTEND_URL=http://localhost:5173

4️⃣ Start Backend
npm run dev

🖥 Frontend Setup
5️⃣ Install Frontend Dependencies
cd ../frontend
npm install

6️⃣ Start Frontend
npm run dev

📌 API Endpoints
POST /api/reservation/new

Create a new reservation

GET /api/reservation/all

Get all reservations

POST /api/user/register

Register a user

POST /api/user/login

Login user

🔐 Slot Booking Logic

Slots available: 9 AM – 6 PM

When the user selects a slot, backend checks:

if(slotAlreadyBooked)
    return "Slot Already Booked"


If free → reservation stored → email sent

🌐 Deployment

Project hosted on Render:

🔗 Live URL:
https://district-dine-app.onrender.com/

📸 Screenshots

(Add when required)

🤝 Contribution

Pull requests are welcome!
Please create a new branch and submit PR.

📄 License

MIT License © 2025 District Dine
