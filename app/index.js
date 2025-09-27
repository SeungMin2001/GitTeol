//useSearchParams + useEffect(의존성) -> home.js에서 인증 다시하라 가능
//토큰있으면 바로 home으로, 토큰없으면 login/reAuth로 가서 토큰받아옴
import {View, Text, Linking, TouchableOpacity} from 'react-native'
import {useRouter} from 'expo-router'
import {useEffect,useState} from 'react'
import {GITHUB_CLIENT_SECRETS,GITHUB_CLIENT_ID} from '@env'
import * as SecureStore from 'expo-secure-store' // access_token 저장하는곳

const Index=()=>{
    const router=useRouter()
    useEffect(()=>{
        checkToken()
    },[])

    const checkToken=async ()=>{
        await SecureStore.deleteItemAsync("GITHUB_ACCESS_TOKEN")
        const token=await SecureStore.getItemAsync("GITHUB_ACCESS_TOKEN")
        if (token){
            console.log('현재 index.js, 토큰존재')
            setTimeout(()=>{
                router.replace('/home') //이미 토큰 있는경우 바로 메인홈 
            },2000)
            
        }
        else{
            console.log('현재 index.js, 토큰없음')
            router.replace('/login/reAuth') //토큰 없는경우 인증받으러 
        }
    }
    return(
        <View/>
    )
}
export default Index