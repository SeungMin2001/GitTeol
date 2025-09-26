const getUserInfo = async (key,username)=>{
    const response=await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                'Authorization':`Bearer ${key}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        })

    if (!response.ok) {console.log('error: ', response.status)}
    const userData=await response.json()
    return userData
}
export default getUserInfo
