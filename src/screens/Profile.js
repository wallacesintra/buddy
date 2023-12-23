import React,{useEffect} from "react";
import { SafeAreaView,View, Text, StyleSheet,ScrollView } from "react-native";
import ProfileDetails from "../components/profileDetails";
import {useDispatch,useSelector } from 'react-redux'
import { fetchUserData } from "../redux/userSlice";
import { fetchFollows } from "../redux/followsSlice";
import { fetchRecentSongs } from "../redux/recentSongsSlice";
import RecentListens from "../components/RecentListens";


const Profile = (props) => {
    const {navigation} = props
    const {loading, user_data} = useSelector((state) => state.user)
    const {follows} = useSelector((state) => state.follows)
    const { recentSongs } = useSelector((state) => state.recentSongs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserData())
        dispatch(fetchFollows())
        dispatch(fetchRecentSongs())
        console.log('loading...')
    }, [])
    
    if (!loading &&user_data) {
        //console.log(user_data[0])
    }
    return (
        <SafeAreaView style={styles.container}>
            {follows && user_data?
                <ProfileDetails
                    profileImg={require('../../assets/test.jpeg')}
                    user_name = {user_data[0]?.username}
                    following = {follows?.length}
                    followers = {follows?.length}
                    goToFollower = {() => navigation.navigate('Follow')}
                    goToFollowing = {() => navigation.navigate('Following')}
                />
            : null}

            <View style={styles.listens}>
                <Text style={styles.txtListen}>Recently played</Text>
                {recentSongs? 
                 <RecentListens
                    DATA = {recentSongs}
                 />:
                 <Text>loading...</Text>
                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#031839',
        flex: 1,
    },
    txt: {
        color: '#FAFCDB'
    },
    listens: {
        margin: 15,
        overflow: 'scroll'
    },
    txtListen: {
        color: '#FAFCDB',
        fontSize: 20,
    },

})
export default Profile