import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Login from "./components/login"
import Home from "./components/Home"
import Add from "./components/add"
import Detail from "./components/detail"
import Update from "./components/update"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}


