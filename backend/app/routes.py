# ----------------------------------------
# 📄 File: backend/app/routes.py
# ----------------------------------------

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from mock_data import SAMPLE_DATA
from typing import List

# Create a router to group our API endpoints
router = APIRouter()


# Pydantic model defines the shape of our data response
class DataPoint(BaseModel):
    timestamp: str  # ISO-format timestamp
    value: float  # Measured value (e.g. temperature)


@router.get(
    "/data", response_model=List[DataPoint], summary="Get all sample data points"
)
async def get_data():
    """
    Retrieve the full list of mock environmental data points.
    """
    # If no data is present, return a 404 error
    if not SAMPLE_DATA:
        raise HTTPException(status_code=404, detail="No data available")
    # Otherwise return the list of data points
    return SAMPLE_DATA
