import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Feather } from "@expo/vector-icons";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconStyle = {
            backgroundColor: focused ? "tomato" : "transparent",
            borderRadius: 20,
            width: 70,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }; // Створюємо порожній об'єкт стилів

          if (route.name === "ProfileScreen") {
          
            iconName = "user";
          } else if (route.name === "Створити публікацію") {
            iconName = "plus";
          } else if (route.name === "Публікації") {
            iconName = "grid";
          }
          return (
            <View style={iconStyle}>
              <Feather
                name={iconName}
                size={size}
                color={color}
              />
            </View>
          );
        },
        tabBarActiveTintColor: "white", // Активний колір
        tabBarInactiveTintColor: "gray", // Колір неактивних елементів
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="Публікації"
        component={CommentsScreen}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
