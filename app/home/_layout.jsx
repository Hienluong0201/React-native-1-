import { Tabs } from "expo-router";
import { Text, Image } from "react-native";
import { AppProvider } from "../../app-context";

export default function RootLayout() {
  return (
    <AppProvider>
    <Tabs
      screenOptions={({ route }) => {
        const icons = {
          index: require("../../assets/images/homee.png"),
          cart: require("../../assets/images/shopppp.png"),
          favorite: require("../../assets/images/Grouppp.png"),
          notification: require("../../assets/images/thongbao.png"),
        };

        return {
          tabBarStyle:{
              backgroundColor: 'black',
          },
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#d17842" : "#4e5053" }}>
              {route.name === "index"
                ? "Home"
                : route.name === "cart"
                ? "Cart"
                : route.name === "favorite"
                ? "Favorite"
                : "Notification"}
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons[route.name]}
              style={{ tintColor: focused ? "#d17842" : "#4e5053", width: 24, height: 24 }}
            />
          ),
        };
      }}
    >
      <Tabs.Screen name="index"  />
      <Tabs.Screen name="cart" options={{ title: "2" }} />
      <Tabs.Screen name="favorite" options={{ title: "3" }} />
      <Tabs.Screen name="notification" options={{ title: "4" }} />
    </Tabs>
    </AppProvider>
  );
}
