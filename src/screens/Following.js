import React, { useEffect,memo } from "react";
import { View,SafeAreaView,Text,StyleSheet } from "react-native";
import FollowList from "../components/followList";
import { fetchFollows } from "../redux/followsSlice";
import { useDispatch, useSelector } from "react-redux";

const Following = ({navigation}) => {
    const { follows } = useSelector((state) => state.follows)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFollows())
        console.log("following loading...")
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Following</Text>
            <View style={styles.follows}>
                <FollowList
                    DATA = {follows}
                    goToProfile = {() => navigation.navigate('Profile')}
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
       // margin: 10
    },
})

export default Following