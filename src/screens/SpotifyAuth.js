import React, {useEffect} from "react";
import { WebView } from 'react-native-webview';
import {SPOTIFY_TOKEN } from '@env'

const SpotifyAuth = ({navigation}) => {
    console.log(SPOTIFY_TOKEN)
    // Fetch data from the Spotify API
    const fetchSpotifyData = (accessToken) => {
        fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Spotify Data:', data);
        })
        .catch((error) => {
            console.error('Error fetching Spotify data:', error);
        });
    };
  
    const handleNavigationStateChange = (newState) => {
        // Check if the redirected URL contains the access token
        if (newState?.url.includes('your_redirect_uri')) {
          // Extract the access token from the URL
          const accessToken = newState.url.split('=')[1].split('&')[0];
  
          // Use the access token for further API requests
          fetchSpotifyData(accessToken);
  
          // Optional: Navigate to another screen or perform additional actions
          navigation.navigate('Profile');
        }
      }
    useEffect(() => {
        handleNavigationStateChange()
        // return () => {
        //   // Cleanup or remove event listeners if needed
        // };
      }, []);
    return(
        <WebView
            source={{ uri: 'https://wallacewahongo.netlify.app/' }}
            // onLoad={handleNavigationStateChange}
            style={{ marginTop: 20 }}
        />
    )
}

export default SpotifyAuth