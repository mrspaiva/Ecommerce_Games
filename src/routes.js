import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './pages/Home'
import Cart from './pages/Cart'
import CartProvider from './context/addCart'

export default function Routes() {
  return(
    <CartProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>

          <AppStack.Screen name="Home" component={Home}/>
          <AppStack.Screen name="Cart" component={Cart}/>

        </AppStack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}