import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import Users from './components/Users/Users';
const Stack = createStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
    <Stack.Navigator>
   
    <Stack.Screen 
   options={{headerShown: false}} 
     name="Login" component={Login}/>
       <Stack.Screen 
   options={{headerShown: false}} 
     name="home" component={Users}/>
    </Stack.Navigator>
  


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
