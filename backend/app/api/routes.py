from fastapi import APIRouter
from app.schemas.feedback import Feedback
from app.services.features import get_features

router = APIRouter()

@router.get("/features")
def features():
    return {"features": get_features()}

@router.get("/about")
def about():
    return {
        "name": "Sylva.ai",
        "description": "AI-powered platform for intelligent interactions and knowledge."
    }

@router.post("/feedback")
def feedback(data: Feedback):
    # In future, save to DB. For now, just return it.
    return {"status": "success", "feedback": data}
