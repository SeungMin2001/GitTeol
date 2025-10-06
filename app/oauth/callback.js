  import { View, Text } from 'react-native'
  import { useEffect, useState } from 'react'
  import { useRouter, useLocalSearchParams } from 'expo-router'
  import * as SecureStore from 'expo-secure-store'
  import getToken from '../../api/code2token'

  const callBack=()=>{
    const router=useRouter()
    const {code}= useLocalSearchParams()

    const sendCodeToBackend=async (code)=>{
        const result=await getToken(code)
        const token=result.access_token

        const response=await fetch('https://api.github.com/user',{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        const userData=await response.json()

        console.log('토큰: ',token)
        console.log('username: ',userData.login)

        await SecureStore.setItemAsync("GITHUB_ACCESS_TOKEN",token)
        await SecureStore.setItemAsync("USER_NAME",userData.login)
        
        router.replace('/home')
    }

    useEffect(()=>{
        console.log('앱이 시작되었습니다!')
        console.log('등록 중...!')

        if (code){
            console.log('code 추출-완료: ',code)
            sendCodeToBackend(code)
        }
        else{
            console.log('code 추출-실패')
        }
    })
  }
  export default callBack