# github API 사용해서 레포지토리 가져오는 파일
import requests, os 
from dotenv import load_dotenv

load_dotenv()

def get_user_repos(username, token):
    url=f"https://api.github.com/users/{username}/repos"
    headers={
        'Authorization': f'Bearer {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    try:
        response=requests.get(url,headers=headers)
        if response.status_code!=200:
            print("에러")
            return False
        
        repos=response.json()
        print('repo 가져오기 성공')
        return repos

        
    except Exception as a:
        print('실패')
        return False
        
def find_repo_image(owner,repo_name,token,branch='main'):
    url =f"https://api.github.com/repos/{owner}/{repo_name}/git/trees/{branch}?recursive=1"
    headers={
        'Authorization': f'Bearer {token}',
        'Accept': 'application/vnd.github.v3+json'
    }
    try:
        response=requests.get(url,headers=headers)
        
        if response.status_code!=200:
            if branch == 'main':
                find_repo_image(owner,repo_name,token,'master')
            return None
        
        tree=response.json().get('tree,[]')
        image_extensions=['.png','jpg','jpeg','gif','webp','svg']
        
        for file in tree:
            path=file.get('path','')
            if any(path.lower().endswith(ext) for ext in image_extensions):
                raw_url=f"https://raw.githubusercontent.com/{owner}/{repo_name}/{branch}/{path}"
                print('이미지 발견: ',path)
                return raw_url
        print(repo_name, ': 이미지 없음')
        return None
        
        
    except Exception as e:
        print('이미지 찾기 실패: ',e)
        return None
    
if __name__ == '__main__':
    token=os.getenv('GITHUB_ACCESS_TOKEN')
    username=''