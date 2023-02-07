import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Entrada from './pages/Entrada/index';
import Principal from './pages/Principal/index';
import Sobremesa from './pages/Sobremesa/index';
import Vegano from './pages/Vegano/index';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
        }}
        initialRouteName="Entradas">
        <Tab.Screen name="Entradas" component={Entrada} />

        <Tab.Screen name="Principais" component={Principal} />

        <Tab.Screen name="Sobremesas" component={Sobremesa} />

        <Tab.Screen name="Veganos" component={Vegano} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
