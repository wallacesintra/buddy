import React from "react";
import { View, StyleSheet,Pressable,Image, Text } from "react-native";

const ProfileDetails = (props) => {
    const {profileImg, user_name,following, followers, goToFollower, goToFollowing} = props

    return (
        <View style={styles.profile_wrapper}>
            <View style={styles.profileImgWrapper}>
                <Image
                    style={styles.imgProfile}
                    source={profileImg}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.profileDetails}>
                <Text style= {styles.profileName}>
                    {user_name}
                </Text>
                <View style={styles.follow}>
                    <Pressable onPress={goToFollower}>
                        <Text style={styles.txt}> {followers} followers</Text>
                    </Pressable>
                    <Pressable onPress={goToFollowing}>
                        <Text style={styles.txt}> {following} following</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile_wrapper: {
        margin: 10,
        flexDirection: 'row',

    },
    profileImgWrapper: {
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    },
    imgProfile: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flexDirection: 'row'
        // margin: 10
    },
    profileDetails: {
        justifyContent: 'center',

    },
    profileName: {
        padding: 5,
        fontSize: 20,
        color: '#FAFCDB',
    },
    follow: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        gap: 10,
        flexDirection: 'row'
    },
    txt: {
        color: '#FAFCDB'
    },
})

export default ProfileDetails