import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator(); // вказує на групу навігаторів
import LoginScreen from "./src/Screens/auth/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen";
import Home from "./src/Screens/mainScreens/Home";

const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />

        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return <Home />;
};

export default useRoute;
