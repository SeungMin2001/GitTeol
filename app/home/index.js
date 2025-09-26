// 메인화면, 탭 뿌려주기
import {View,Text,Image} from 'react-native'
import {useEffect} from 'react'
import {useUser} from '../../global/contexts/conText'

const homePage=()=>{
    const {userData,getInfo}=useUser()
    useEffect(()=>{
        getInfo()
    },[])

    return(
        <View>
            <Text>home</Text>
        </View>
    )
}

export default homePage