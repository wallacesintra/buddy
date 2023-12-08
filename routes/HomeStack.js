import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign_In from '../src/screens/Sign_In'
import Profile from '../src/screens/Profile'
import Follow from '../src/screens/Follows'

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Sign In" component={Sign_In} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Follow" component={Follow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack