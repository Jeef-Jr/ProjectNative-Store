import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerBackTitle: "Home",
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  style={{ marginRight: 15 }}
                  name="shopping-cart"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
