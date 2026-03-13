# Authentication

Generated with Template Builder

## 🎯 Project Configuration

### Modules


### Templates


### Backend Implementation


## 🚀 Getting Started

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local if needed
npm run dev
```

## 📁 Project Structure

```
Authentication/
├── backend/          # Express + TypeScript backend
│   ├── src/
│   │   ├── modules/  # Feature modules
│   │   ├── config/   # Configuration
│   │   └── server.ts # Entry point
│   └── package.json
│
└── frontend/         # Next.js + React frontend
    ├── pages/        # Routes
    ├── components/   # Components
    ├── services/     # API services
    └── package.json
```

## 🔧 Configuration

Make sure to update the following:
1. Backend `.env` file with your database credentials
2. Frontend `.env.local` with API URL (if different)
3. Install required databases (MongoDB/PostgreSQL/MySQL/Redis)

## 📝 API Documentation

Default backend runs on: `http://localhost:5000`
Default frontend runs on: `http://localhost:3000`

### Auth Endpoints
- POST `/api/auth/signup` - Create new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (requires auth)

---

**Built with Template Builder** 🚀
