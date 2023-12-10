// import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import Sign_In from '../src/screens/Sign_In'
import Profile from '../src/screens/Profile'
import Follow from '../src/screens/Follows'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();


function HomeStack() {
  const { isSigned } = useSelector((state) => state.login)
  return (
    <Stack.Navigator 
      initialRouteName="Sign_In"
    >
      {
        isSigned ? (
          <>
            <Stack.Screen 
              name="Profile" 
              component={Profile} 
              options={{ 
                //title: 'My profile', 
                headerShown: false
                }}
            />
            <Stack.Screen 
              name="Follow" 
              component={Follow}
              options={{ 
                headerShown: false
              }} 
            />
          </>
        ) : (
          <>
          <Stack.Screen 
            name="Sign_In" 
            component={Sign_In} 
            options={{ 
              headerShown: false
            }}
          />
          </>
        )
      }
  </Stack.Navigator>
  );
}

export default HomeStack