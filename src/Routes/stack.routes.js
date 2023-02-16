import * as React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TopNavigator from './top.routes';

import Receita from '../pages/Receita';

const { Screen, Navigator } = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false}}
          name="Tab"
          component={TopNavigator}
        />
        <Screen name="Receita" component={Receita} 
        options={{
          tabBarShowLabel: false}} />
      </Navigator>
    </NavigationContainer>
  );
}
export default MyStack;