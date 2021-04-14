import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import onboarding from "./src/Authentication/onBoarding"

const AuthenticationStack = createStackNavigator() 

const AuthenticationNavigator = () =>{
  return (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="onboarding" component={onboarding}></AuthenticationStack.Screen>
  </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator></AuthenticationNavigator>
    </NavigationContainer>
  );
}