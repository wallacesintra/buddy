import React,{useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { signIn,signOut } from "../redux/loginSlice";

const Sign_In = ({ navigation }) => {
    
    const { isSigned } = useSelector((state) => state.login)
    const dispatch = useDispatch()

    
    const storeData = async () => {
        try {
          const jsonValue = JSON.stringify(isSigned);
          await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          console.log(e)
        }
    }

    // console.log(signedIn)
    const handleNavigationChange = () => {
        console.log(isSigned)
        dispatch(signIn())
        storeData()
    }

    
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('my-key');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          console.log(e)
        }
    };

    console.log(getData())

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
                //onPress={() => navigation.navigate('Profile')}
                onPress={handleNavigationChange}
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
        margin: 10,
        alignSelf: 'center',
        width: 200,
        overflow: 'hidden',
        height: 200,
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