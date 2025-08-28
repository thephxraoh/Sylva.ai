from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError
from app.api import routes

app = FastAPI(title="Sylva.ai Backend", version="0.1.0")

# Enable CORS (allow frontend to talk to backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change later to only allow frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(routes.router)

@app.get("/")
def read_root():
    return {"message": "Hello from Sylva.ai Backend!"}

# Database connection
DATABASE_URL = "postgresql://sylva:sylva123@localhost:5432/sylva_db"
engine = create_engine(DATABASE_URL)

# Test the connection
try:
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        print("Database connected:", result.fetchone())
except SQLAlchemyError as e:
    print("Database connection error:", e)
