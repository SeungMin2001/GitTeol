// 메인화면, 탭 뿌려주기
import {View,Text,Image} from 'react-native'
import {useState,useEffect} from 'react'
import  *  as SecureStore from 'expo-secure-store'

const getToken=async ()=>{
    const key=await SecureStore.getItemAsync("GITHUB_ACCESS_TOKEN")
    return key
}


const test=()=>{
    const [avatarUrl,setAvatarUrl]=useState(null)
    const [userInfo,setUserInfo]=useState(null)
    const key=getToken()

    const getInfo=async ()=>{ // 토큰으로 깃허브 정보 가져오기
        const username='shinchangyoung'
        const key=await getToken()
        const response=await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                'Authorization':`Bearer ${key}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        if (!response.ok){
            console.log(response.status)
        }
        const useData=await response.json()
        setAvatarUrl(useData.avatar_url)
        setUserInfo(useData)
    }
    useEffect(()=>{
        getInfo()
    },[])
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        {avatarUrl && (
          <Image
              source={{uri: avatarUrl}}
              style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100
              }}
          />
      )}
          {userInfo && (
              <View style={{alignItems: 'center', marginTop: 20}}>
                  {/* 이름 */}
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                      {userInfo.name || userInfo.login}
                  </Text>

                  {/* 팔로워/팔로잉 */}
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Text style={{marginRight: 20}}>
                          팔로워: {userInfo.followers}
                      </Text>
                      <Text>팔로잉: {userInfo.following}</Text>
                  </View>

                {/* 잔디 이미지 */}
                <Image
                    source={{uri: `https://github-readme-streak-stats.herokuapp.com/?user=${userInfo.login}&theme=default`}}
                    style={{
                        width: 320,
                        height: 200,  // 높이 조금 늘림
                        marginTop: 10,
                        borderRadius: 8
                    }}
                    onLoad={() => console.log('잔디 이미지 로드 성공!')}
                    onError={() => console.log('잔디 이미지 로드 실패!')}
                />

              </View>
          )}
      </View>
  )
}
export default test