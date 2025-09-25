# 경로->auth/github

from pydantic import BaseModel
import requests ,os
from dotenv import load_dotenv
from fastapi import APIRouter

router=APIRouter() #객체생성

class GithubCodeRequest(BaseModel):
    code:str

load_dotenv()    
client_id=os.getenv("GITHUB_CLIENT_ID")
client_secret=os.getenv("GITHUB_CLIENT_SECRET")
exchange_token_url="https://github.com/login/oauth/access_token"

@router.post("/get/token")
def github_auth(request:GithubCodeRequest):

    token_params={
        'client_id':client_id,
        'client_secret':client_secret,
        'code':request.code,
        'redirect_uri':'exp://localhost:8081/--/oauth/callback'
    }
    headers={
        'Accept':'application/json'
    }
    response=requests.post(
        exchange_token_url,
        data=token_params,
        headers=headers
    )
    res=response.json()
    access_token=res['access_token']
    print('access_token: ',access_token)

    return {"success":True,"access_token":access_token}




