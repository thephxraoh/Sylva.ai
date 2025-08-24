from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (Next.js) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 👇 Our test route
@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI!"}
@app.get("/api/features")
def get_features():
    return {
        "features": [
            {"id": 1, "title": "Study Assistant", "description": "Helps with study materials and resources"},
            {"id": 2, "title": "To-Do List", "description": "Helps manage tasks and deadlines"},
            {"id": 3, "title": "Calendar Integration", "description": "Syncs with your calendar for better planning"},
            {"id": 4, "title": "Writing Assistant", "description": "Aiding in writing tasks and projects"}
        ]
    }