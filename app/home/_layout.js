import {Tabs} from 'expo-router'
import UserProvider from '../../global/contexts/conText'

const homePage=()=>{
    return(
        <UserProvider>
            <Tabs>
                <Tabs.Screen name="index" options={{title:'홈'}}/>
                <Tabs.Screen name="search" options={{title:'검색'}}/>
                <Tabs.Screen name="profile" options={{title:'프로필'}}/>
            </Tabs>
        </UserProvider>
    )
}
export default homePage