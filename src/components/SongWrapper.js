import React from "react";
import { View,Text,Image, StyleSheet,Pressable } from "react-native";

const SongWrapper = ({navigation}) => {

    return (
        <Pressable 
            style={styles.songWrapper}
            onPress={() => console.log('song')}
        >
            <Image
                style={styles.songCover}
                source={require('../../assets/test.jpeg')}
            />
            <View style = {styles.songDetails}>
                <Text style={[styles.songName, styles.txt]}>New Song</Text>
                <Text style={[styles.artistName,styles.txt]}>Floersd</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    songWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10
    },
    songCover: {
        width: 60,
        height: 60,
    },
    songDetails: {
        justifyContent: 'center'
    },
    txt: {
        color: '#FAFCDB'
    },
    songName: {
        fontSize: 19,
        fontWeight: '600'
    },
    artistName: {
        fontWeight: '300'
    }
})
export default SongWrapper