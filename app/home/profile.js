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
            backgroundColor: '#000000'
        }}>
            {/* 상단 헤더 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingTop: 12,
                paddingBottom: 12,
                backgroundColor: '#000000',
                borderBottomWidth: 0.3,
                borderBottomColor: '#333333'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: '#fafafa',
                        letterSpacing: -0.3
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
                backgroundColor: '#000000',
                paddingHorizontal: 16,
                paddingTop: 20,
                paddingBottom: 16
            }}>
                {/* 프로필 카드 */}
                <View style={{
                    backgroundColor: '#0a0a0a',
                    borderRadius: 20,
                    padding: 24,
                    borderWidth: 0.5,
                    borderColor: '#1a1a1a',
                    marginBottom: 12
                }}>
                    {/* 프로필 이미지 + 통계 (가로 배치) */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 24
                    }}>
                        {/* 프로필 이미지 */}
                        <View style={{
                            width: 140,
                            height: 140,
                            borderRadius: 70,
                            borderWidth: 3,
                            borderColor: '#ffffff',
                            padding: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 20
                        }}>
                            <Image
                                source={{
                                    uri: userData?.avatar_url || 'https://github.com/identicons/default.png'
                                }}
                                style={{
                                    width: 126,
                                    height: 126,
                                    borderRadius: 63,
                                    backgroundColor: '#1a1a1a'
                                }}
                            />
                        </View>

                        {/* 통계 정보 (세로 배치) */}
                        <View style={{
                            flex: 1,
                            gap: 12
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#111111',
                                paddingVertical: 16,
                                paddingHorizontal: 16,
                                borderRadius: 12,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderWidth: 0.5,
                                borderColor: '#222222'
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    color: '#888888',
                                    fontWeight: '500',
                                    letterSpacing: -0.2
                                }}>
                                    팔로워
                                </Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    letterSpacing: -0.5
                                }}>
                                    {formatNumber(userData?.followers)}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                backgroundColor: '#111111',
                                paddingVertical: 16,
                                paddingHorizontal: 16,
                                borderRadius: 12,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderWidth: 0.5,
                                borderColor: '#222222'
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    color: '#888888',
                                    fontWeight: '500',
                                    letterSpacing: -0.2
                                }}>
                                    팔로잉
                                </Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    letterSpacing: -0.5
                                }}>
                                    {formatNumber(userData?.following)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 이름 & 유저네임 */}
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: '700',
                            color: '#ffffff',
                            marginBottom: 4,
                            letterSpacing: -0.6
                        }}>
                            {userData?.name || userData?.login}
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#888888',
                            fontWeight: '400',
                            letterSpacing: -0.2
                        }}>
                            @{userData?.login || 'username'}
                        </Text>
                    </View>

                    {/* 소개 & 추가 정보 */}
                    {userData?.bio && (
                        <Text style={{
                            fontSize: 14,
                            color: '#cccccc',
                            lineHeight: 20,
                            marginBottom: 16,
                            letterSpacing: -0.2
                        }}>
                            {userData.bio}
                        </Text>
                    )}

                    {(userData?.location || userData?.blog) && (
                        <View style={{
                            gap: 8
                        }}>
                            {userData?.location && (
                                <Text style={{
                                    fontSize: 13,
                                    color: '#999999',
                                    letterSpacing: -0.2,
                                    fontWeight: '400'
                                }}>
                                    📍 {userData.location}
                                </Text>
                            )}

                            {userData?.blog && (
                                <TouchableOpacity>
                                    <Text style={{
                                        fontSize: 13,
                                        color: '#ffffff',
                                        letterSpacing: -0.2,
                                        fontWeight: '400'
                                    }}>
                                        🔗 {userData.blog}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>
            </View>

            {/* 구분선 */}
            <View style={{
                height: 0.3,
                backgroundColor: '#2a2a2a',
                marginTop: 18
            }} />
        </ScrollView>
    )
}

export default profile