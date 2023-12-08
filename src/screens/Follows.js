import React from "react";
import { View, SafeAreaView, Text, StyleSheet,Image} from "react-native";
import User from "../components/User";

const Follow = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Follow</Text>
            <View style={styles.follows}>
                <User
                    goTo = {()=> navigation.navigate('Profile')}
                />
                <User
                    goTo = {()=> navigation.navigate('Profile')}
                />
                <User
                    goTo = {()=> navigation.navigate('Profile')}
                />                
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#031839',
        flex: 1
    },
    txt: {
        color: '#FAFCDB'
    },
    title: {
        alignSelf: "center",
        margin: 20,
        fontSize: 23,
        color: '#FAFCDB'
    },
    follows: {
        margin: 10
    },


})
export default Follow