import { Stack, Tabs, Slot } from "expo-router";

export default function RootLayout() {
  return(
    <Tabs
    screenOptions={({ route }) => {
        return {
            tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? "blue" : "black" }}>
                    {route.name.toString()=="index"?"Home"
                    :route.name.toString()=="register"?"Register"
                    :route.name.toString()=="dom"?"Dom"
                    :route.name.toString()=="Login"?"Login"
                };

                </Text>           )
        }
    }}
    >

    </Tabs>
  );
}
