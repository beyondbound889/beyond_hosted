# Testimonials/Reviews API - Setup Guide

## Overview

This guide explains how to set up and use the testimonials/reviews API for the Beyond Bound application.

## Backend Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud - MongoDB Atlas recommended)
- npm or yarn

### Installation Steps

1. **Navigate to the backend directory:**

```bash
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file (copy from .env.example):**

```bash
cp .env.example .env
```

4. **Update `.env` with your MongoDB credentials:**

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/beyond-bound
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

For local MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/beyond-bound
```

5. **Start the server:**

```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Public Endpoints

#### GET `/api/testimonials`

Fetches all verified testimonials (displays to users)

**Response:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Naina Sharma",
      "quote": "My insulin levels have never been so balanced...",
      "rating": 5,
      "role": "Verified Customer",
      "verified": true,
      "createdAt": "2024-03-21T10:30:00Z"
    }
  ]
}
```

#### POST `/api/testimonials`

Submit a new testimonial (unverified, awaiting admin review)

**Request Body:**

```json
{
  "name": "John Doe",
  "quote": "This product exceeded my expectations!",
  "rating": 5,
  "role": "Verified Customer"
}
```

**Validation Rules:**

- `name`: Required, minimum 2 characters
- `quote`: Required, 10-500 characters
- `rating`: Optional (default: 5), must be 1-5
- `role`: Optional, can be "Verified Customer", "Beta Tester", or "Health Professional"

**Response:**

```json
{
  "success": true,
  "message": "Testimonial submitted successfully. Our team will review it shortly.",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "John Doe",
    "quote": "This product exceeded my expectations!",
    "rating": 5,
    "role": "Verified Customer",
    "verified": false,
    "createdAt": "2024-03-21T10:35:00Z"
  }
}
```

### Admin Endpoints (Future - Add Auth)

#### GET `/api/testimonials/admin/all`

Fetch all testimonials (including unverified)

#### PUT `/api/testimonials/admin/:id`

Update/verify a testimonial

**Request Body:**

```json
{
  "verified": true,
  "name": "Updated Name",
  "quote": "Updated quote",
  "rating": 5
}
```

#### DELETE `/api/testimonials/admin/:id`

Delete a testimonial

## Frontend Integration

### Environment Variables

Update `.env.local` in the frontend root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Using the API in Components

#### Option 1: Using the Testimonial Service

```javascript
import {
  fetchTestimonials,
  submitTestimonial,
} from "../services/testimonialService";

// Fetch testimonials
const data = await fetchTestimonials();

// Submit new testimonial
const response = await submitTestimonial({
  name: "User Name",
  quote: "Their experience...",
  rating: 5,
  role: "Verified Customer",
});
```

#### Option 2: Direct Fetch (as shown in LovedSection.jsx)

```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
const response = await fetch(`${apiUrl}/testimonials`);
const data = await response.json();
```

### Components Created

1. **LovedSection.jsx** - Displays testimonials fetched from API
   - Located in: `src/home/src/components/LovedSection.jsx`
   - Fetches from GET `/api/testimonials`
   - Falls back to hardcoded testimonials if API is unavailable

2. **TestimonialSubmission.jsx** - Form for submitting new testimonials
   - Located in: `src/components/TestimonialSubmission.jsx`
   - Sends POST request to `/api/testimonials`
   - Includes form validation and user feedback

### Adding Testimonial Submission to Your Pages

Import and use the submission component:

```javascript
import TestimonialSubmission from "../components/TestimonialSubmission";

function MyPage() {
  return (
    <div>
      {/* Other content */}
      <TestimonialSubmission />
    </div>
  );
}
```

## Database Schema

### Testimonial Model

```javascript
{
  name: String,              // Required, min 2 chars
  role: String,              // Enum: "Verified Customer", "Beta Tester", "Health Professional"
  quote: String,             // Required, 10-500 chars
  image: String,             // Optional, URL to image
  rating: Number,            // 1-5, default 5
  verified: Boolean,         // Default false (needs admin approval)
  createdAt: Date,           // Auto-generated
  updatedAt: Date            // Auto-updated
}
```

## Running Both Frontend and Backend

### Terminal 1 - Backend:

```bash
cd backend
npm install
npm run dev
```

### Terminal 2 - Frontend:

```bash
npm install
npm run dev
```

Frontend will be at: `http://localhost:5173`
Backend API will be at: `http://localhost:5000/api`

## Error Handling

The frontend includes fallback handling:

- If the API is unavailable, hardcoded testimonials are displayed
- Form submissions show user-friendly error messages
- All API calls include error logging for debugging

## Future Enhancements

1. **Admin Authentication** - Protect admin endpoints with JWT/session auth
2. **Image Upload** - Allow users to upload profile images
3. **Pagination** - Handle large numbers of testimonials
4. **Filtering & Sorting** - Sort by rating, date, verified status
5. **Email Notifications** - Notify admins of new submissions
6. **Moderation** - Flag inappropriate testimonials automatically
7. **User Accounts** - Link testimonials to user profiles

## Troubleshooting

### "Failed to fetch testimonials"

- Check if backend is running on port 5000
- Verify `VITE_API_BASE_URL` environment variable
- Check browser console for CORS errors

### MongoDB Connection Error

- Verify MongoDB is running (if local)
- Check connection string in `.env`
- Ensure IP is whitelisted (if using MongoDB Atlas)

### Validation Errors

- Ensure name has at least 2 characters
- Ensure quote has 10-500 characters
- Ensure rating is between 1-5

## Contact & Support

For issues or questions, reach out to the development team.
