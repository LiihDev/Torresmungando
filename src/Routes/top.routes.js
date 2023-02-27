import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../components/Header";
import Entrada from "../pages/Entrada/index";
import Principal from "../pages/Principal/index";
import Sobremesa from "../pages/Sobremesa/index";
import Vegano from "../pages/Vegano/index";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Roboto_400Regular" },
        tabBarActiveTintColor: "#339989",
        tabBarInactiveTintColor: "#9C9090",
        tabBarActiveBackgroundColor: "#1B1D2E",
        tabBarInactiveBackgroundColor: "#1B1D2E",
        // tabBarIcon:,
        tabBarIndicatorContainerStyle: {
          borderBottomColor: "#339989",
          borderBottomWidth: 2,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        headerStyle:{
          borderTopWidth: 0,
         },
      }}
      initialRouteName="Entradas"
    >
      <Tab.Screen name="Entradas" component={Entrada} />

      <Tab.Screen name="Principais" component={Principal} />

      <Tab.Screen name="Sobremesas" component={Sobremesa} />

      <Tab.Screen name="Veganos" component={Vegano} />
    </Tab.Navigator>
  );
}
