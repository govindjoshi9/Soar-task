# Soar Task Management App

A powerful and user-friendly web application designed to manage daily and weekly expenses, quick transfers, and more. This app allows users to log in, view their dashboard with card details, track expenses, make quick transfers, and modify profile settings.

## Hosted Link

You can access the live demo of the project here:

[**Soar Task Management App**](https://your-hosted-link.com)

## Project Features

- **Login & Dashboard**: Users can log in with their credentials and access their personalized dashboard. The dashboard includes:
  - **Card Details**: View detailed information about their linked cards.
  - **Daily Expenses**: A quick overview of daily spending.
  - **Quick Transfer**: Easily make transfers between accounts.
  - **Weekly Expenses**: Track weekly expenses with summaries.

- **Profile Settings**: Users can update their personal details, including changing their profile picture, name, and contact information.

### Project Details

1. **Login**:
   - Users can log in using their email and password.
   - Upon successful login, they are redirected to their dashboard.

2. **Dashboard**:
   - **Card Details**: Displays linked card information and balance.
   - **Daily Expenses**: A section that shows the user's daily expenses, categorized for easy tracking.
   - **Quick Transfer**: Allows users to quickly transfer money between accounts or wallets.
   - **Weekly Expenses**: A summary of weekly expenses, showing totals and categories.

3. **Settings**:
   - Users can navigate to the settings page to:
     - Change their profile details (name, email, etc.).
     - Upload or change their profile picture.
     - Update password and other personal preferences.

## Setup Instructions

### Prerequisites

Before setting up the project, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (Node package manager)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/soar-task.git
cd soar-task
```
### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```
### 3. Configure Environment Variables

Create a .env file at the root of the project and set up the following environment variables:

```bash
REACT_APP_API_URL=your_api_base_url
REACT_APP_AUTH_SECRET=your_jwt_secret
```
Ensure the API URL points to the backend server where the authentication, dashboard, and other services are hosted.


### 4. Run the Development Server

To start the development server locally, run:

```bash
npm start
```
This will start the project at http://localhost:3000. Open this URL in your browser to see the app in action.

### 5. Build the Project

To build the project for production, run:

```bash
npm run build
```
This will generate a dist/ folder containing the optimized production build.

### 6. Deploy to Production

For deploying the project to production (e.g., to a service like Vercel, Netlify, or another hosting provider), run:

```bash
npm run deploy
```
Follow your hosting provider's instructions to deploy the build from the dist/ directory.

- **Technologies Used**
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: JWT (JSON Web Token) for secure login
- Charting: Chart.js for displaying expense trends and summaries

- **Screenshots**
- Dashboard
- ![Screenshot (257)](https://github.com/user-attachments/assets/258eb083-78f0-44ff-9d45-811aeac3739c)
- ![Screenshot (258)](https://github.com/user-attachments/assets/94a3ffdc-c762-4ac6-a06f-decf3ad3ea3e)

- Profile Settings

![Screenshot (259)](https://github.com/user-attachments/assets/d0f0c14c-5cf7-44a4-9559-a8f7b36a06f4)


