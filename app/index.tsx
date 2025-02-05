import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import Register from "./Register";
import HomeScreen from "./HomeScreen";
import ProductDetail1 from "./ProductDetail1";
import CoffeDetailsScreen from "./CoffeDetailsScreen";
import Home from "./Home";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductDetail1" component={ProductDetail1} />
        <Stack.Screen name="CoffeDetailsScreen" component={CoffeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
