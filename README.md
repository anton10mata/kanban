# Kanban Board
## 📌 Description
### Kanban Board is a task management application built using React (TypeScript), Node.js, Express, and PostgreSQL. It allows users to register, log in, create, edit, and delete tasks, helping them manage their workflow effectively.

### The application implements JWT authentication, ensuring secure access to user-specific tasks. It is deployed on Render for both the frontend and backend.

[🔗 Kanban Board on Netlify](krazykanbanboard.netlify.app)

## 🛠 Technologies Used
- Frontend: React (TypeScript), Vite, CSS
- Backend: Node.js, Express, PostgreSQL
- Authentication: JWT (JSON Web Tokens)
- Database Management: Sequelize ORM
- Deployment: Netlify

## 📂 File Structure
```bash
kanban/
│── client/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages (Board, Login, Register, etc.)
│   │   ├── utils/        # Helper functions (Auth, API calls)
│   │   ├── index.tsx     # React entry point
│   │   ├── App.tsx       # Main App component
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   ├── tsconfig.json     # TypeScript config
│── server/               # Backend (Node.js + Express)
│   ├── src/
│   │   ├── api/          # Routes for authentication & tasks
│   │   ├── controllers/  # Business logic for API requests
│   │   ├── models/       # Database models (Sequelize ORM)
│   │   ├── server.ts     # Express server setup
│   ├── package.json      # Backend dependencies
│   ├── tsconfig.json     # TypeScript config
│── README.md             # Project documentation
│── .gitignore            # Files to ignore in Git
```
## ⚙️ Features
- ✅ User Authentication (Register & Login with JWT)
- ✅ Create New Tasks (Tickets)
- ✅ Edit Tasks (Modify existing tickets)
- ✅ Delete Tasks (Remove tasks from the board)
- ✅ Task Organization (Drag and drop between columns)
- ✅ Secure API with JWT (Token-based authentication)
- ✅ Deployment on Render (Live on the web)

## 🖥️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/anton10mata/kanban.git
cd kanban
```
## 2️⃣ Install Dependencies
### Frontend:
```bash
cd client
npm install
```
### Backend:
```bash
cd ../server
npm install
```
## 3️⃣ Set Up the Database
- Create a PostgreSQL database.
- Update the .env file in the server/ folder with your database credentials.
- Run migrations:
```bash
npx sequelize-cli db:migrate
```

## 4️⃣ Start the Application
### Run the Backend Server
```bash
cd server
npm run dev
```
### Run the Frontend
```bash
cd ../client
npm run dev
```
- Frontend runs on http://localhost:5173
- Backend runs on http://localhost:5003

## 📝 API Endpoints
### HTTP Method	| Endpoint | Description
### POST | /api/auth/register | Register new user
### POST | /api/auth/login | Authenticate user
### GET | /api/tickets | Get all tickets
### POST | /api/tickets | Create a new ticket
### PUT | /api/tickets/:id | Update a ticket
### DELETE | /api/tickets/:id | Delete a ticket

## 📜 License
### This project is licensed under the MIT License.

