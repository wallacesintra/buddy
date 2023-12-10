import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import SpotifyAuth from './src/screens/SpotifyAuth';
import store from './src/redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack/>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App
