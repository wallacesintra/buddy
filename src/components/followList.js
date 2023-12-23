import React,{memo} from "react";
import {FlatList } from "react-native";
import User from "./User";

const FollowList = (props) => {
    const { DATA,goToProfile } = props
    const renderItem = ({item}) => (
        <User
            goTo = {goToProfile}
            user_name = {item.name}
            followers = {(item.username).length}
            profileImg = {require('../../assets/test.jpeg')}
        />
    )

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    ) 
}

export default memo(FollowList)