import {createContext,useContext,useState,useEffect, Children} from 'react'
import * as SecureStore from 'expo-secure-store'
import getUserInfo from '../../api/token2user'

const UserContext=createContext() //저장소 생성

const UserProvider=({children})=>{
    const [userData,setUserData]=useState(null)

    const getToken=async ()=>{
        const key=await SecureStore.getItemAsync("GITHUB_ACCESS_TOKEN")
        return key
    }
    const getInfo=async ()=>{ // 토큰으로 깃허브 정보 가져오기
        try{
            const username='tensorflow'
            const key=await getToken()
            const userData= await getUserInfo(key,username)
            setUserData(userData)
        }
        catch (error){
            console.log('error: ',error)
        }
    }
    return(
        <UserContext.Provider value={{
            userData,
            getInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser=()=>{
    const context=useContext(UserContext)
    if (!context){
        console.log('error')
    }
    return context
}
export default UserProvider