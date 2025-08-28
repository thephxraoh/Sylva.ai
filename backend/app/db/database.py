from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://sylva:sylva123@localhost:5432/sylva_db"

# SQLAlchemy engine
engine = create_engine(DATABASE_URL, echo=True)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

# Dependency to use in routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
