from sqlalchemy.orm import Session
from app.db.models import User

def get_users(db: Session):
    """Retrieve all users from the database."""
    return db.query(User).all()

def create_user(db: Session, username: str, email: str):
    """Create a new user in the database."""
    new_user = User(username=username, email=email)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
