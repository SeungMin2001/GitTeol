import {Tabs} from 'expo-router'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native'
import UserProvider from '../../global/contexts/conText'
import Svg, { Path, Circle } from 'react-native-svg'

// Home 아이콘 컴포넌트
const HomeIcon = ({ focused }) => (
    <Svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 11.5358V22H16V17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17V22H2V11.5358L12 2L22 11.5358Z"
            fill={focused ? '#ffffff' : '#8e8e8e'}
        />
    </Svg>
)

// Search 아이콘 컴포넌트
const SearchIcon = ({ focused }) => (
    <Svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <Circle
            cx="10"
            cy="10"
            r="8.1"
            stroke={focused ? '#ffffff' : '#8e8e8e'}
            strokeWidth="2"
        />
        <Path
            d="M22 22L16 16"
            stroke={focused ? '#ffffff' : '#8e8e8e'}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
)

// User 아이콘 컴포넌트
const UserIcon = ({ focused }) => (
    <Svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            fill={focused ? '#ffffff' : '#8e8e8e'}
        />
        <Path
            d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z"
            fill={focused ? '#ffffff' : '#8e8e8e'}
        />
    </Svg>
)

// 터치 효과가 있는 탭 버튼 컴포넌트
const TabButton = ({ children, onPress }) => (
    <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}
    >
        {children}
    </TouchableOpacity>
)

const homePage=()=>{
    return(
        <UserProvider>
            <View style={styles.mainContainer}>
                <Tabs screenOptions={tabDesign}>
                    <Tabs.Screen
                        name="index"
                        options={{
                            title:'',
                            tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
                            tabBarButton: (props) => <TabButton {...props} />
                        }}
                    />
                    <Tabs.Screen
                        name="search"
                        options={{
                            title:'',
                            tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
                            tabBarButton: (props) => <TabButton {...props} />
                        }}
                    />
                    <Tabs.Screen
                        name="profile"
                        options={{
                            title:'',
                            tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
                            tabBarButton: (props) => <TabButton {...props} />
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
        marginTop:-90,
        paddingBottom:0
    },

    tabBar: {
        backgroundColor:'#000000',
        height: 70,
        paddingBottom: 10,
        paddingTop: 8,
        borderTopWidth: 0.3,
        borderTopColor: '#333333',
    },
})
const tabDesign={
    tabBarStyle:styles.tabBar,
    tabBarActiveTintColor: '#fafafa',
    tabBarInactiveTintColor: '#7a7a7a',
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