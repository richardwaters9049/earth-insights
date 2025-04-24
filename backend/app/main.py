# ----------------------------------------
# 📄 File: backend/app/main.py
# ----------------------------------------

# Import the FastAPI class to create our API application
from fastapi import FastAPI

# Import our application routes (we’ll define these in routes.py)
from routes import router as api_router

# Create the FastAPI app instance
# We disable the built-in documentation UIs by setting docs_url and redoc_url to None
app = FastAPI(
    title="Earth Insights API",
    description="Backend for serving scientific environmental data to a custom frontend.",
    version="1.0.0",
    docs_url=None,  # turn off Swagger UI at /docs
    redoc_url=None,  # turn off ReDoc at /redoc
    openapi_url="/api/openapi.json",  # expose raw OpenAPI schema for frontend codegen if desired
)

# Include our API routes under the '/api' prefix
app.include_router(api_router, prefix="/api")

# If launched directly, start Uvicorn with live-reload for development convenience
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
