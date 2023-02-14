import * as React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Entrada from '../pages/Entrada';
import Principal from '../pages/Principal';
import Sobremesa from '../pages/Sobremesa';
import Vegano from '../pages/Vegano';

const { Screen, Navigator } = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Entrada"
          component={Entrada}
        />
        <Screen name="Principal" component={Principal} />
        <Screen name="Sobremesas" component={Sobremesa} />
        <Screen name="Vegano" component={Vegano} />
      </Navigator>
    </NavigationContainer>
  );
}
export default MyStack;