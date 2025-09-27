import {View, Text, Image} from 'react-native'
import {useUser} from '../../global/contexts/conText'

const profile=()=>{
    const {userData, getInfo} = useUser()

    return (
        <View style={{flex: 1}}>
            {/* 상단 영역 - 사용자 이름 */}
            <View style={{
                flex: 1,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    {userData?.login || userData?.name}
                </Text>
            </View>

            {/* 중간 영역 - 메인 콘텐츠 */}
            <View style={{
                flex: 18,
                backgroundColor: '#f8f9fa',
                padding: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 15
                }}>
                    {/* 왼쪽 - 프로필 이미지 */}
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image
                            source={{
                                uri: userData?.avatar_url || 'https://github.com/identicons/default.png'
                            }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                backgroundColor: '#e0e0e0'
                            }}
                        />
                    </View>

                    {/* 오른쪽 - 팔로워/팔로잉 */}
                    <View style={{
                        flex: 1,
                        paddingTop: 10
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            backgroundColor: '#fff',
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                            borderRadius: 12,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3
                        }}>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}>
                                    {userData?.followers || 0}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#666',
                                    marginTop: 2
                                }}>
                                    팔로워
                                </Text>
                            </View>

                            <View style={{
                                width: 1,
                                backgroundColor: '#e0e0e0',
                                marginVertical: 5
                            }} />

                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}>
                                    {userData?.following || 0}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#666',
                                    marginTop: 2
                                }}>
                                    팔로잉
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default profile

