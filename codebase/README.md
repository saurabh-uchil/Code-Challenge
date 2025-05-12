# Folder structure:

codebase/  
├── frontend/    # (React + Vite + TS app)  
└── backend/     # (Node + Express)  

# Getting Started  
# Frontend Setup  

1. Navigate to the frontend directory:  
cd codebase/frontend

2. Install dependencies:  
npm install

# Backend Setup  

1. Navigate to the backend directory:  
cd codebase/backend

2. Install dependencies:  
npm install

# Environment Config:

Both frontend and backend directories contain .env files.

Important: Update the PORT in the .env files before running the apps.

Example:
codebase/frontend/.env
VITE_PORT=YOURBACKENDPORT

codebase/backend/.env
PORT=YOURBACKENDPORT

# Running the Applications

cd codebase/frontend  
npm run dev

cd codebase/backend  
npm run dev
