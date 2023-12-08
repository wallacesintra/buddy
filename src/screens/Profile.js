import React from "react";
import { SafeAreaView,View, Text, StyleSheet,Image,Pressable } from "react-native";
import SongWrapper from "../components/SongWrapper";

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile_wrapper}>
                <View style={styles.profileImgWrapper}>
                    <Image
                        style={styles.imgProfile}
                        source={require('../../assets/test.jpeg')}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.profileDetails}>
                    <Text style= {styles.profileName}>
                        Wallace
                    </Text>
                    <View style={styles.follow}>
                        <Pressable onPress={() => navigation.navigate('Follow')}>
                            <Text style={styles.txt}>4 followers</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Follow')}>
                            <Text style={styles.txt}>10 following</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.listens}>
                <Text style={styles.txtListen}>Recent Listens</Text>
                <SongWrapper/>
                <SongWrapper/>
                <SongWrapper/>
                <SongWrapper/>
                <SongWrapper/>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#031839',
        //justifyContent: 'center',
        flex: 1,
        //alignItems: 'center'
    },
    profile_wrapper: {
        margin: 10,
        flexDirection: 'row',

    },
    profileImgWrapper: {
        margin: 10,
        width: 120,
        height: 120,
        borderRadius: 60,
        //backgroundColor: 'red',
        overflow: 'hidden'
    },
    imgProfile: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
        // margin: 10
    },
    profileDetails: {
        justifyContent: 'center',

    },
    profileName: {
        padding: 5,
        fontSize: 23,
        color: '#FAFCDB',
    },
    follow: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        gap: 5,
        flexDirection: 'row'
    },
    txt: {
        color: '#FAFCDB'
    },
    listens: {
        margin: 15,
    },
    txtListen: {
        color: '#FAFCDB',
        fontSize: 20,
    },

})
export default Profile