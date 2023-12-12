import React from "react";
import { View,Pressable,Text, StyleSheet } from "react-native";

const Setting = () => {
    return(
        <View style= {styles.container}>
            <Pressable>
                <Text>
                    Sign out
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Setting