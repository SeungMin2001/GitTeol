import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import {useUser} from '../../global/contexts/conText'
import {useEffect} from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

const profile=()=>{
    const {userData, getInfo} = useUser()

    useEffect(() => {
        getInfo()
    }, [])

    // 숫자 포맷팅 함수 (1000 -> 1K)
    const formatNumber = (num) => {
        if (!num) return 0
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
        }
        return num.toString()
    }

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#0a0a15'
        }}>
            {/* 상단 헤더 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#0a0a15',
                borderBottomWidth: 0.5,
                borderBottomColor: '#262626'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: '#ffffff',
                        letterSpacing: -0.5
                    }}>
                        {userData?.login || 'username'}
                    </Text>
                    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <Defs>
                            <LinearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <Stop offset="0%" stopColor="#667eea" />
                                <Stop offset="100%" stopColor="#764ba2" />
                            </LinearGradient>
                        </Defs>
                        <Path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58718 21.9983 7.995C21.9983 6.40282 21.3658 4.87584 20.24 3.75C19.1142 2.62416 17.5872 1.99166 15.995 1.99166C14.4028 1.99166 12.8758 2.62416 11.75 3.75L5 10.5V19H13.5L20.24 12.24Z" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M16 8L2 22" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M17.5 15H9" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                </View>

                <TouchableOpacity>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M3 12H21M3 6H21M3 18H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                </TouchableOpacity>
            </View>

            {/* 프로필 정보 섹션 */}
            <View style={{
                backgroundColor: '#0a0a15',
                paddingHorizontal: 16,
                paddingTop: 16,
                paddingBottom: 20
            }}>
                {/* 프로필 이미지 & 통계 */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 16,
                    paddingHorizontal: 4
                }}>
                    {/* 프로필 이미지 */}
                    <View style={{
                        marginRight: 28,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 95,
                            height: 95,
                            borderRadius: 47.5,
                            padding: 2.5,
                            borderWidth: 2,
                            borderColor: '#262626',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={{
                                    uri: userData?.avatar_url || 'https://github.com/identicons/default.png'
                                }}
                                style={{
                                    width: 87,
                                    height: 87,
                                    borderRadius: 43.5,
                                    backgroundColor: '#1a1a1a'
                                }}
                            />
                        </View>
                    </View>

                    {/* 통계 정보 */}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingTop: 4
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            minWidth: 60
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#ffffff',
                                marginBottom: 4,
                                letterSpacing: -0.3
                            }}>
                                {formatNumber(userData?.public_repos)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#a8a8a8',
                                fontWeight: '400',
                                letterSpacing: -0.1
                            }}>
                                게시물
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            minWidth: 60
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#ffffff',
                                marginBottom: 4,
                                letterSpacing: -0.3
                            }}>
                                {formatNumber(userData?.followers)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#a8a8a8',
                                fontWeight: '400',
                                letterSpacing: -0.1
                            }}>
                                팔로워
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            minWidth: 60
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#ffffff',
                                marginBottom: 4,
                                letterSpacing: -0.3
                            }}>
                                {formatNumber(userData?.following)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#a8a8a8',
                                fontWeight: '400',
                                letterSpacing: -0.1
                            }}>
                                팔로잉
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 이름 & 소개 */}
                <View style={{paddingHorizontal: 4}}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: 4,
                        lineHeight: 18,
                        letterSpacing: -0.2
                    }}>
                        {userData?.name || userData?.login}
                    </Text>

                    {userData?.bio && (
                        <Text style={{
                            fontSize: 14,
                            color: '#ffffff',
                            lineHeight: 18,
                            marginBottom: 6,
                            letterSpacing: -0.1
                        }}>
                            {userData.bio}
                        </Text>
                    )}

                    {userData?.location && (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 4
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#a8a8a8',
                                lineHeight: 18,
                                letterSpacing: -0.1
                            }}>
                                📍 {userData.location}
                            </Text>
                        </View>
                    )}

                    {userData?.blog && (
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 14,
                                color: '#3897f0',
                                lineHeight: 18,
                                textDecorationLine: 'none',
                                letterSpacing: -0.1,
                                fontWeight: '500'
                            }}>
                                🔗 {userData.blog}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* 프로필 편집 버튼 */}
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                    marginTop: 12,
                    paddingHorizontal: 4
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        backgroundColor: '#262626',
                        paddingVertical: 7,
                        borderRadius: 8,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>프로필 편집</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flex: 1,
                        backgroundColor: '#262626',
                        paddingVertical: 7,
                        borderRadius: 8,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>프로필 공유</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 구분선 */}
            <View style={{
                height: 0.5,
                backgroundColor: '#262626',
                marginTop: 16
            }} />
        </ScrollView>
    )
}

export default profile