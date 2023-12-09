
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign_In from '../src/screens/Sign_In'
import Profile from '../src/screens/Profile'
import Follow from '../src/screens/Follows'

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
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
  );
}

export default HomeStack