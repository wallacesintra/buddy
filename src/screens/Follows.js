import React, {useEffect} from "react";
import { View, SafeAreaView, Text, StyleSheet,Image, FlatList} from "react-native";
import FollowList from "../components/followList";
import { useSelector, useDispatch } from "react-redux";
import { fetchFollows } from "../redux/followsSlice";
import User from "../components/User";

const Follow = ({navigation}) => {

    const {follows} = useSelector((state) => state.follows)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFollows())
        console.log('loading follows...')
    }, [])

    console.log(follows[0])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Following</Text>
            <View style={styles.follows}>
                {/*follows?
                <FlatList
                 data = {follows}
                 renderItem={renderItem}
                />
                :<Text>loading</Text>
                */}
                <FollowList
                    DATA = {follows}
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