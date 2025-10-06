import pymysql, os
from dotenv import load_dotenv

load_dotenv()
#---------------------------------------------------------- # DB연결 담당 함수
def db_connection():
    return pymysql.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),           # root
        password=os.getenv('DB_PASSWORD'),   # 비밀번호 (없으면 '')
        database=os.getenv('DB_NAME'),       # gitteol
        port=int(os.getenv('DB_PORT', 3306)), # 3306
        charset='utf8mb4',                    # 한글 지원
        cursorclass=pymysql.cursors.DictCursor
    )
#----------------------------------------------------------

def save_repo_image(user_name, repo_name,repo_url,image_url,is_default_image): # 레포지토리 정보 저장. 여러가지 파일들에서 동시에 가져다 쓸거임.
    connection=get_db_connection()
    cursor=connection.cursor()
    
    try:
        sql = """
            INSERT INTO repository_images
            (user_name, repo_name, repo_url, image_url, is_default_image)
            VALUES (%s, %s, %s, %s, %s)
        """
        
        cursor.execute(sql,(user_name, repo_name,repo_url,image_url,is_default_image))
        connection.commit()
        print("저장완료: ",repo_name)
        
    except Exception as e:
        connection.rollback()
        print("저장실패: ",e)
        raise
    
    finally:
        cursor.close()
        connection.close()
#----------------------------------------------------------

def get_repo_images(user_name, page=1, limit=12): # 레포지토리 이미지 가져오는 함수
    connection=db_connection()
    cursor=connection.cursor()
    
    try:
        offset=(page-1)*limit
        
        sql = """
            SELECT id, repo_name, repo_url, image_url, thumbnail_url,
                    is_default_image, star_count, created_at
            FROM repository_images
            WHERE user_name = %s
            ORDER BY created_at DESC
            LIMIT %s OFFSET %s
        """
        
        cursor.execute(sql,(user_name,limit,offset))
        rows=cursor.fetchall()
        return rows
        
    except Exception as e:
        print('조회 실패: ',e)
        return False
    
    finally:
        cursor.close()
        connection.close()
        
    
