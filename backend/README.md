# Backend Setup - Quick Start

## Install and Run Backend

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
# Create .env file from example
cp .env.example .env

# Edit .env and add your MongoDB connection string
# For local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/beyond-bound

# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/beyond-bound
```

### 3. Start Backend Server

```bash
npm run dev
```

Server runs on: `http://localhost:5000`

## API Endpoints

### Get All Verified Testimonials

```
GET http://localhost:5000/api/testimonials
```

### Submit New Testimonial

```
POST http://localhost:5000/api/testimonials
Content-Type: application/json

{
  "name": "Your Name",
  "quote": "Your testimonial here",
  "rating": 5,
  "role": "Verified Customer"
}
```

## Frontend Configuration

In `.env.local`:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

## Testing the API

### Using curl:

```bash
# Get all testimonials
curl http://localhost:5000/api/testimonials

# Submit a testimonial
curl -X POST http://localhost:5000/api/testimonials \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "quote": "This is a test testimonial!",
    "rating": 5
  }'
```

### Using Postman or Thunder Client:

1. Import the endpoints from above
2. Set request method and URL
3. Add JSON body for POST requests
4. Click Send

## Database Requirements

You need MongoDB running. Choose one:

### Option 1: Local MongoDB

- Install MongoDB locally
- Start service: `mongod`
- Connection string: `mongodb://localhost:27017/beyond-bound`

### Option 2: MongoDB Atlas (Cloud)

- Create free account at https://www.mongodb.com/cloud/atlas
- Create cluster
- Get connection string
- Add to `.env` as `MONGODB_URI`

## File Structure

```
backend/
├── server.js                 # Main server file
├── package.json
├── .env.example
├── models/
│   └── Testimonial.js        # MongoDB schema
├── routes/
│   └── testimonials.js       # API routes
└── controllers/
    └── testimonialController.js  # Request handlers
```

## Next Steps

1. Install backend dependencies: `npm install`
2. Setup MongoDB
3. Configure `.env`
4. Run backend: `npm run dev`
5. Test API with curl/Postman
6. Run frontend and see testimonials fetch from API!
