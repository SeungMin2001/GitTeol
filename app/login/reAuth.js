import {View, Text, Linking,Pressable ,TouchableOpacity} from 'react-native'
import {useEffect,useState} from 'react'
import {useRouter} from 'expo-router'
import {GITHUB_CLIENT_SECRETS,GITHUB_CLIENT_ID} from '@env'
import * as SecureStore from 'expo-secure-store' // access_token 저장하는곳
import getToken from '../../api/code2token'

const goLogin=()=>{
    const redirect_url='exp://localhost:8081/--/oauth/callback'
    const url=`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirect_url}&scope=user`
    Linking.openURL(url)
}

const Index=()=>{ //디폴트함수
    return( // 토큰이 없는상황이므로 깃허브 로그인 버튼을 만들어주는곳
        <View>
            <Text>test</Text>
            <TouchableOpacity onPress={goLogin}>
                <Text>please click Button to get token</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Index
