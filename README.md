# Beyond Hosted

## Run locally

```bash
npm install
npm run dev
```

## Google Sign-In setup

1. Create a Google OAuth 2.0 Client ID for a **Web application** in Google Cloud Console.
2. Add authorized JavaScript origins:
	- `http://localhost:5173`
	- Your production domain
3. Copy `.env.example` to `.env.local` and set your client ID:

```bash
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID.apps.googleusercontent.com
```

4. Restart the dev server if it is already running.

Google Sign-In is integrated in the navbar login dropdown.
