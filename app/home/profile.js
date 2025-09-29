import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import {useUser} from '../../global/contexts/conText'
import {useEffect} from 'react'

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
            backgroundColor: '#ffffff'
        }}>
            {/* 상단 헤더 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingTop: 12,
                paddingBottom: 8,
                backgroundColor: '#ffffff'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: '700',
                        color: '#262626',
                        letterSpacing: -0.8
                    }}>
                        {userData?.login || 'username'}
                    </Text>
                    <TouchableOpacity style={{marginLeft: 6, marginTop: 2}}>
                        <Text style={{fontSize: 16, color: '#262626', opacity: 0.6}}>▼</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 22}}>
                    <TouchableOpacity>
                        <View style={{
                            width: 26,
                            height: 26,
                            borderWidth: 2.5,
                            borderColor: '#262626',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#262626', marginTop: -1}}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            width: 26,
                            height: 26,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                gap: 3
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    gap: 3
                                }}>
                                    <View style={{width: 4, height: 4, backgroundColor: '#262626', borderRadius: 2}} />
                                    <View style={{width: 4, height: 4, backgroundColor: '#262626', borderRadius: 2}} />
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    gap: 3
                                }}>
                                    <View style={{width: 4, height: 4, backgroundColor: '#262626', borderRadius: 2}} />
                                    <View style={{width: 4, height: 4, backgroundColor: '#262626', borderRadius: 2}} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 프로필 정보 섹션 */}
            <View style={{
                backgroundColor: '#ffffff',
                paddingHorizontal: 16,
                paddingTop: 12,
                paddingBottom: 20
            }}>
                {/* 프로필 이미지 & 통계 */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 18,
                    paddingHorizontal: 4
                }}>
                    {/* 프로필 이미지 */}
                    <View style={{
                        marginRight: 36,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 94,
                            height: 94,
                            borderRadius: 47,
                            padding: 3,
                            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 8
                        }}>
                            <Image
                                source={{
                                    uri: userData?.avatar_url || 'https://github.com/identicons/default.png'
                                }}
                                style={{
                                    width: 86,
                                    height: 86,
                                    borderRadius: 43,
                                    backgroundColor: '#f8f8f8',
                                    borderWidth: 3,
                                    borderColor: '#ffffff'
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
                                fontSize: 22,
                                fontWeight: '800',
                                color: '#262626',
                                marginBottom: 2,
                                letterSpacing: -0.5
                            }}>
                                {formatNumber(userData?.public_repos)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#262626',
                                fontWeight: '400',
                                letterSpacing: -0.2
                            }}>
                                게시물
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            minWidth: 60
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: '800',
                                color: '#262626',
                                marginBottom: 2,
                                letterSpacing: -0.5
                            }}>
                                {formatNumber(userData?.followers)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#262626',
                                fontWeight: '400',
                                letterSpacing: -0.2
                            }}>
                                팔로워
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            minWidth: 60
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: '800',
                                color: '#262626',
                                marginBottom: 2,
                                letterSpacing: -0.5
                            }}>
                                {formatNumber(userData?.following)}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#262626',
                                fontWeight: '400',
                                letterSpacing: -0.2
                            }}>
                                팔로잉
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 이름 & 소개 */}
                <View style={{paddingHorizontal: 4}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#262626',
                        marginBottom: 2,
                        lineHeight: 22,
                        letterSpacing: -0.3
                    }}>
                        {userData?.name || userData?.login}
                    </Text>

                    {userData?.bio && (
                        <Text style={{
                            fontSize: 15,
                            color: '#262626',
                            lineHeight: 21,
                            marginBottom: 8,
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
                                fontSize: 15,
                                color: '#8e8e8e',
                                lineHeight: 20,
                                letterSpacing: -0.1
                            }}>
                                📍 {userData.location}
                            </Text>
                        </View>
                    )}

                    {userData?.blog && (
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                color: '#00376b',
                                lineHeight: 20,
                                textDecorationLine: 'none',
                                letterSpacing: -0.1,
                                fontWeight: '500'
                            }}>
                                🔗 {userData.blog}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* 구분선 */}
            <View style={{
                height: 0.5,
                backgroundColor: '#dbdbdb',
                marginTop: 16
            }} />
        </ScrollView>
    )
}

export default profile