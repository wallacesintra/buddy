import React from "react";
import { FlatList} from "react-native";
import SongWrapper from "./SongWrapper";

const RecentListens = (props) => {
    const {DATA} = props

    const renderItem = ({item}) => (
        <SongWrapper
            album_cover={require('../../assets/test.jpeg')}
            song_name = {item.name}
            artist_name = {item.username}
        />
    )
    return( 
        <FlatList
            data={DATA}
            renderItem={renderItem}
        />  
    )
}

export default RecentListens