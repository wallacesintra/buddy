import React from "react";
import { View, Text, StyleSheet,Image,Pressable} from "react-native";

const User = (props) => {
    const {goTo, user_name, followers,profileImg} = props

    return(
        <Pressable 
            style= {styles.userWrapper}
            onPress={goTo}
        >
            <View style={styles.imgWrapper}>
                <Image
                    source={profileImg}
                    style={ styles.userImg}
                />
            </View>
            <View style={styles.userDetails}>
                <Text style= {[styles.txt, styles.userName]}> {user_name}</Text>
                <Text style={[styles.txt, styles.followers]}>{followers} followers</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    userWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10,

    },
    txt: {
        color: '#FAFCDB'
    },
    imgWrapper: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',

    },
    userImg: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    userDetails: {
        justifyContent: 'center'
    },
    userName: {
        fontSize: 19,
        fontWeight: '600'
    },
    followers: {
        fontWeight: '300'
    }


})
export default User