import {View, Text, Linking, TouchableOpacity} from 'react-native'
import {useEffect,useState} from 'react'
import {useRouter} from 'expo-router'
import {GITHUB_CLIENT_SECRETS,GITHUB_CLIENT_ID} from '@env'
import * as SecureStore from 'expo-secure-store' // access_token 저장하는곳

const goLogin=()=>{
    const redirect_url='exp://localhost:8081/--/oauth/callback'
    const url=`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirect_url}&scope=user`
    Linking.openURL(url)
}

const sendCodeToBackend=async (code,router)=>{  // 추출한 code를 backend로 전달
    try{
        const response=await fetch('http://localhost:8082/get/token',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({code})
        })
        const result=await response.json()
        console.log('토큰: ',result.access_token)//형변환이 아님, 데이터 받아오고 있기때문에 await
        await SecureStore.setItemAsync("GITHUB_ACCESS_TOKEN",result.access_token) //key:value 형태로 저장. getItemAsync(key)로 가져올수있음
        router.replace('/home')
    }
    catch (error){
        console.log('error: ',error ,'-',"access token 변환 실패")
    }
}

const handleIncomingURL=async (event,router)=>{ //code 포함된 url 받아서 code만 추출하는 함수
    console.log("받은 URL:", event.url)

    const url=new URL(event.url)
    const code=url.searchParams.get('code')

    console.log("추출된 코드 :", code)
    sendCodeToBackend(code,router)
}

const Index=()=>{ //디폴트함수
    const router=useRouter()
    useEffect(()=>{
        console.log("앱이 시작되었습니다!")
        console.log("등록 중....!")
        Linking.getInitialURL().then(
            (url)=>{
                if (url && url.includes('oauth/callback')){
                    console.log('callback 감지')
                    handleIncomingURL({url},router)
                }
            }
        )
        console.log("등록 완료!")
    },[])

    return(
        <View>
            <TouchableOpacity onPress={goLogin}>
                <Text>please click Button to get token</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Index
