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
            backgroundColor: '#0a0a0f'
        }}>
            {/* 상단 헤더 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: '#0a0a0f',
                borderBottomWidth: 1,
                borderBottomColor: '#1a1a2e'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: '700',
                        color: '#ffffff',
                        letterSpacing: -0.5
                    }}>
                        {userData?.login || 'username'}
                    </Text>
                    <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <Defs>
                            <LinearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <Stop offset="0%" stopColor="#8b5cf6" />
                                <Stop offset="100%" stopColor="#ec4899" />
                            </LinearGradient>
                        </Defs>
                        <Path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58718 21.9983 7.995C21.9983 6.40282 21.3658 4.87584 20.24 3.75C19.1142 2.62416 17.5872 1.99166 15.995 1.99166C14.4028 1.99166 12.8758 2.62416 11.75 3.75L5 10.5V19H13.5L20.24 12.24Z" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M16 8L2 22" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M17.5 15H9" stroke="url(#featherGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                </View>

                <TouchableOpacity style={{
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: '#1a1a2e'
                }}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M3 12H21M3 6H21M3 18H21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                </TouchableOpacity>
            </View>

            {/* 프로필 정보 섹션 */}
            <View style={{
                backgroundColor: '#0a0a0f',
                paddingHorizontal: 20,
                paddingTop: 24,
                paddingBottom: 20
            }}>
                {/* 프로필 카드 */}
                <View style={{
                    backgroundColor: '#12121a',
                    borderRadius: 24,
                    padding: 28,
                    borderWidth: 1,
                    borderColor: '#1f1f2e',
                    marginBottom: 16
                }}>
                    {/* 프로필 이미지 + 통계 (가로 배치) */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 28
                    }}>
                        {/* 프로필 이미지 */}
                        <View style={{
                            position: 'relative',
                            marginRight: 24
                        }}>
                            {/* 그라디언트 링 효과 */}
                            <Svg width="148" height="148" style={{ position: 'absolute', top: -4, left: -4 }}>
                                <Defs>
                                    <LinearGradient id="profileRing" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <Stop offset="0%" stopColor="#8b5cf6" />
                                        <Stop offset="50%" stopColor="#ec4899" />
                                        <Stop offset="100%" stopColor="#f59e0b" />
                                    </LinearGradient>
                                </Defs>
                                <Rect
                                    width="148"
                                    height="148"
                                    rx="74"
                                    ry="74"
                                    stroke="url(#profileRing)"
                                    strokeWidth="3"
                                    fill="none"
                                />
                            </Svg>
                            <View style={{
                                width: 140,
                                height: 140,
                                borderRadius: 70,
                                backgroundColor: '#1a1a2e',
                                padding: 4,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={{
                                        uri: userData?.avatar_url || 'https://github.com/identicons/default.png'
                                    }}
                                    style={{
                                        width: 132,
                                        height: 132,
                                        borderRadius: 66,
                                        backgroundColor: '#1a1a2e'
                                    }}
                                />
                            </View>
                        </View>

                        {/* 통계 정보 (세로 배치) */}
                        <View style={{
                            flex: 1,
                            gap: 14
                        }}>
                            {/* 팔로워 카드 */}
                            <TouchableOpacity style={{
                                backgroundColor: '#1a1a2e',
                                paddingVertical: 18,
                                paddingHorizontal: 18,
                                borderRadius: 16,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                borderColor: '#2a2a3e'
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#a0a0b0',
                                    fontWeight: '600',
                                    letterSpacing: -0.3
                                }}>
                                    팔로워
                                </Text>
                                <Text style={{
                                    fontSize: 22,
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    letterSpacing: -0.6
                                }}>
                                    {formatNumber(userData?.followers)}
                                </Text>
                            </TouchableOpacity>

                            {/* 팔로잉 카드 */}
                            <TouchableOpacity style={{
                                backgroundColor: '#1a1a2e',
                                paddingVertical: 18,
                                paddingHorizontal: 18,
                                borderRadius: 16,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                borderColor: '#2a2a3e'
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#a0a0b0',
                                    fontWeight: '600',
                                    letterSpacing: -0.3
                                }}>
                                    팔로잉
                                </Text>
                                <Text style={{
                                    fontSize: 22,
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    letterSpacing: -0.6
                                }}>
                                    {formatNumber(userData?.following)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 이름 & 유저네임 */}
                    <View style={{ marginBottom: 24 }}>
                        <Text style={{
                            fontSize: 26,
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: 6,
                            letterSpacing: -0.8
                        }}>
                            {userData?.name || userData?.login}
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#8b8b9f',
                            fontWeight: '500',
                            letterSpacing: -0.3
                        }}>
                            @{userData?.login || 'username'}
                        </Text>
                    </View>

                    {/* 소개 & 추가 정보 */}
                    {userData?.bio && (
                        <View style={{
                            backgroundColor: '#1a1a2e',
                            padding: 16,
                            borderRadius: 14,
                            marginBottom: 16,
                            borderWidth: 1,
                            borderColor: '#2a2a3e'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#d0d0dc',
                                lineHeight: 22,
                                letterSpacing: -0.3
                            }}>
                                {userData.bio}
                            </Text>
                        </View>
                    )}

                    {(userData?.location || userData?.blog) && (
                        <View style={{
                            gap: 10
                        }}>
                            {userData?.location && (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                    paddingVertical: 8
                                }}>
                                    <Text style={{ fontSize: 16 }}>📍</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#a0a0b0',
                                        letterSpacing: -0.3,
                                        fontWeight: '500'
                                    }}>
                                        {userData.location}
                                    </Text>
                                </View>
                            )}

                            {userData?.blog && (
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                    paddingVertical: 8
                                }}>
                                    <Text style={{ fontSize: 16 }}>🔗</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#8b5cf6',
                                        letterSpacing: -0.3,
                                        fontWeight: '600',
                                        textDecorationLine: 'underline'
                                    }}>
                                        {userData.blog}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>
            </View>

            {/* 구분선 */}
            <View style={{
                height: 1,
                backgroundColor: '#1f1f2e',
                marginTop: 24,
                marginHorizontal: 20
            }} />
        </ScrollView>
    )
}

export default profile