import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign_In from './src/screens/Sign_In';
import Profile from './src/screens/Profile';
import Follow from './src/screens/Follows';
// import User from './src/components/User';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign_In">
        <Stack.Screen 
          name="Sign_In" 
          component={Sign_In} 
          options={{ 
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: 'My profile',  }}
        />
        <Stack.Screen 
          name="Follow" 
          component={Follow} 
          options={{ 
            //headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
export default App
