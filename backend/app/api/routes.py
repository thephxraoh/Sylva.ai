from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.crud.user import create_user, get_user_by_email, verify_password
from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "your_super_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter()

# --- Pydantic MODELS ---

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

# --- ROUTES ---

@router.post("/register")
def register_user(request: RegisterRequest, db: Session = Depends(get_db)):
    if get_user_by_email(db, request.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    user = create_user(db, request.username, request.email, request.password)
    return {"message": f"User {user.username} created successfully!"}


@router.post("/login")
def login_user(request: LoginRequest, db: Session = Depends(get_db)):
    user = get_user_by_email(db, request.email)
    if not user or not verify_password(request.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"message": f"Welcome {user.username}!"}
