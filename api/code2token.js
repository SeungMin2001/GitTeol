const getToken = async (code)=>{
    try{
        const response=await fetch('http://localhost:8082/get/token',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({code})
        })
        const result=await response.json()
        return result
        //console.log('토큰: ',result.access_token)//형변환이 아님, 데이터 받아오고 있기때문에 await
        //await SecureStore.setItemAsync("GITHUB_ACCESS_TOKEN",result.access_token) //key:value 형태로 저장. getItemAsync(key)로 가져올수있음
        //router.replace('/home')
    }
    catch (error){
        console.log('error: ',error ,'-',"access token 변환 실패")
    }
}
export default getToken