import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import {useUser} from '../../global/contexts/conText'
const profile=()=>{
    const {userData,getInfo}=useUser() //새로고침(업데이트 내용 있을시) 할때 getInfo 사용하자.
    return (
        <ScrollView style={styles.container}>
            {/* 프로필 헤더 */}
            <View style={styles.header}>
                <Image
                    source={{ uri: userData.avatar_url }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{userData.name || userData.login}</Text>
                <Text style={styles.bio}>{userData.bio || '안녕하세요!'}</Text>
            </View>

            {/* 팔로워/팔로잉 정보 */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{userData.followers}</Text>
                    <Text style={styles.statLabel}>팔로워</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{userData.following}</Text>
                    <Text style={styles.statLabel}>팔로잉</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{userData.public_repos}</Text>
                    <Text style={styles.statLabel}>저장소</Text>
                </View>
            </View>

            {/* 추가 정보 */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>📍 {userData.location || '위치 없음'}</Text>
                <Text style={styles.infoText}>🌐 {userData.blog || '웹사이트 없음'}</Text>
                <Text style={styles.infoText}>📅 가입일: {new Date(userData.created_at).toLocaleDateString()}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    infoContainer: {
        padding: 20,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
})

export default profile 

