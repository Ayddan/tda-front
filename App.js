import React, { createContext, useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import RegisterValidation from './src/screens/RegisterConfirmation';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator()

const UserContext = createContext({})

export default function App() {
  const [userToken, setUserToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  if(isLoading){
    return(
      <>
        <Text>Loading...</Text>
      </>
    )
  }

  return (
    <UserContext.Provider value = {{userToken, user}}>
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="Login"
          >
            <Stack.Screen
                name="Home"
                component={Home}
              />
              <Stack.Screen
                name="Register"
                component={Register}
              />
              <Stack.Screen
                name="Login"
                component={Login}
              />
              <Stack.Screen
                name="RegisterConfirmation"
                component={RegisterValidation}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
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
