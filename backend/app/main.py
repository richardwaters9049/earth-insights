# ----------------------------------------
# 📄 File: backend/app/main.py
# ----------------------------------------

from fastapi import FastAPI

# ✅ Import CORSMiddleware to handle Cross-Origin Resource Sharing
from fastapi.middleware.cors import CORSMiddleware

from routes import router as api_router

app = FastAPI(
    title="Earth Insights API",
    description="Backend for serving scientific environmental data to a custom frontend.",
    version="1.0.0",
    docs_url=None,
    redoc_url=None,
    openapi_url="/api/openapi.json",
)

# ─── CORS Configuration ─────────────────────────────────────────────────────────
# Define which origins (domains) are allowed to make cross-origin requests
# In development, this is your Next.js app:
origins = [
    "http://localhost:3000",  # Next.js dev server
    # You can add other origins here, e.g. your production domain
]

# Add the CORS middleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # ← only these origins may access the API
    allow_credentials=True,  # ← allow cookies, Authorization headers, etc.
    allow_methods=["GET", "POST"],  # ← HTTP methods allowed
    allow_headers=["*"],  # ← which headers are allowed in requests
)
# ────────────────────────────────────────────────────────────────────────────────

# Include your API routes under /api
app.include_router(api_router, prefix="/api")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
