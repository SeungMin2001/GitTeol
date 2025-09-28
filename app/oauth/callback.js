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
        console.log('토큰: ',result.access_token)
        await SecureStore.setItemAsync("GITHUB_ACCESS_TOKEN",result.access_token)
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