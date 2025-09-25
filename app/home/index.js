import {View,Text} from 'react-native'
import  *  as SecureStore from 'expo-secure-store'

const getToken=async ()=>{
    const key=await SecureStore.getItemAsync("GITHUB_ACCESS_TOKEN")
    return key
}

const test=()=>{
    const key=getToken()
    return(
        <View>
            <Text>test: {key}</Text>
        </View>
    )
}
export default test