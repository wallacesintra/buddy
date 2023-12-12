import React from "react";
import {FlatList } from "react-native";
import User from "./User";

const FollowList = (props) => {

    const {DATA} = props
    const renderItem = ({item}) => {
        <User
            goTo = {()=> navigation.navigate('Profile')}
            user_name = {item.name}
            followers = {23}
            profileImg = {require('../../assets/test.jpeg')}
        />
    }
    return (
        <FlatList
            data = {DATA}
            renderItem={renderItem}
        />
    ) 
}

export default FollowList