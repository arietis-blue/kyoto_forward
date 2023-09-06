from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



# frontendのurl
origins = [
    "http://localhost:3000",  
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Number(BaseModel):
    number: int


@app.post("/")
async def increment_number(item: Number):
    return {"result": item.number + 1}


