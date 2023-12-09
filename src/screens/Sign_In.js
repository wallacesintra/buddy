import React,{useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";


const Sign_In = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.img_wrapper}>
                <Image
                    style={styles.img}
                    source={require('../../assets/transparent_bg.png')}
                    resizeMode="cover"
                />
            </View>
            <Pressable 
                onPress={() => navigation.navigate('Profile')}
                //onPress={() => fetchProfile()}
                style={styles.btn_sign_in}
            >
                <Text style={styles.txtSignIn}>Sign In</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#031839"
    },
    img_wrapper: {
        // backgroundColor: 'red',
        margin: 10,
        alignSelf: 'center',
        width: 200,
        overflow: 'hidden',
        //border: 10,
        //borderColor: 'red',
        height: 200,
        //borderRadius: "999"
    },
    img: {
        alignSelf: 'center',
        width: 200,
        height: 200
    },
    btn_sign_in: {
        bottom: -10,
        padding: 7,
        borderRadius: 30,
        backgroundColor: '#FAFCDB',
        width: '80%',
        alignItems: 'center'
    },
    txtSignIn: {
        color: '#031839',
        fontSize: 20,
        fontWeight: '600'
    }
})
export default Sign_In