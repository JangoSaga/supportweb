# Support Website

A robust IT Support System built with **React**, **React Router**, **Firebase**, and **React Query**. This application facilitates seamless ticket management for employees and IT support personnel with role-based access control.

## 🚀 Features

- **User Authentication**: Secure login with Firebase Authentication.
- **Role-Based Access Control**: Different dashboards for Employees and IT Support.
- **Ticketing System**:
  - Employees: Create, update, and delete support tickets.
  - IT Support: View and update all employee tickets.
- **Persistent Login**: "Remember Me" functionality for improved user experience.
- **Responsive UI**: Designed with Tailwind CSS for a clean, modern look.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Routes](#-routes)
- [Technologies](#-technologies)

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/support-website.git
   cd support-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Configure Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up Authentication and Firestore Database.
   - Replace Firebase configuration in the project with your credentials.

## 💻 Usage

1. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).
2. **Employees:**
   - Register/Login to the platform.
   - Create, view, update, and delete support tickets.
3. **IT Support Persons:**
   - Login with IT Support credentials.
   - View and manage all employee tickets.

## 📍 Routes

- `/` - User authentication page
- `/customer-dashboard` - Role-based dashboard
- `/agent-dashboard` - Manage support tickets

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Firebase Authentication** - User authentication
- **Firestore** - NoSQL cloud database
- **React Query** - Data fetching and state management
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Notifications and alerts

**Developed with ❤️ by Karan Vishwakarma**
