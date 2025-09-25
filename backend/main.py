from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware #검증 역할
import requests
import os
from dotenv import load_dotenv
from routers import code2Token
#from routers import getInfo

app=FastAPI()
app.include_router(code2Token.router) # get/token
#app.include_router(getInfo.router) # get/userInfo

# CORS 설정 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__=="__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0",port=8082)
