import * as React from 'react';
import Header from '../components/Header';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TopNavigator from './top.routes';

import Receita from '../pages/Receita';

const { Screen, Navigator } = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer 
   >
      <Navigator>
        <Screen
        options={{
          headerTitle: ()=> <Header/>
          
        }
        }
        
          name="Tab"
          component={TopNavigator}
        />
        <Screen name="Receita" component={Receita} 
         options={{
          title: null,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#339989',
          }
        }
      } />
      </Navigator>
    </NavigationContainer>
  );
}
export default MyStack;