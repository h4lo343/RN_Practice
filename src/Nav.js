import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/account/login'



const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;