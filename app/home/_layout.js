import {Tabs} from 'expo-router'
import {StyleSheet,View,Text,Image} from 'react-native'
import UserProvider from '../../global/contexts/conText'

const homePage=()=>{
    return(
        <UserProvider>
            <View style={styles.mainContainer}>
                <Tabs screenOptions={tabDesign}>
                    <Tabs.Screen
                        name="index"
                        options={{
                            title:'',
                            tabBarIcon: ({color, focused}) => (
                                <Text style={{fontSize: 20, color: focused ? '#000' : '#999'}}>⌂</Text>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="search"
                        options={{
                            title:'',
                            tabBarIcon: ({color, focused}) => (
                                <Text style={{fontSize: 20, color: focused ? '#000' : '#999'}}>○</Text>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="profile"
                        options={{
                            title:'',
                            tabBarIcon: ({color, focused}) => (
                                <Text style={{fontSize: 20, color: focused ? '#000' : '#999'}}>●</Text>
                            ),
                        }}
                    />
                </Tabs>
            </View>
        </UserProvider>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        marginTop:-100,
        paddingTop:0
    },

    tabBar: {
        backgroundColor:'#ffffff',
        height: 70,
        paddingBottom: 10,
        paddingTop: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#e1e1e1',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
    },
})
const tabDesign={
    tabBarStyle:styles.tabBar,
    tabBarActiveTintColor: '#000000', // 인스타그램스러운 검은색
    tabBarInactiveTintColor: '#8e8e93', // 회색
    tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '600',
        marginTop: 2,
    },
    tabBarIconStyle: {
        marginBottom: -3,
    },
}


export default homePage