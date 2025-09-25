#경로->auth/userInfo

from fastapi import APIRouter
from pydantic import BaseModel

router=APIRouter()

class GithubCodeRequest(BaseModel):
    code:str
    
#@router.post("get/userInfo")
#def getInfo(request:GithubCodeRequest):
    

