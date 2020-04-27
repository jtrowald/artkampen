import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import * as React from "react";

import Colors from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import CompetitionScreen from "./screens/CompetitionScreen";
import DevScreen from "./screens/DevScreen";
import NewEntryScreen from "./screens/NewEntry/NewEntryScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: "Artkampen" });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Ställning"
        component={CompetitionScreen}
        options={{
          title: "Tävling",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"award"}
              size={25}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Hem"
        component={NewEntryScreen}
        options={{
          title: "Lägg till art",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={"plus"}
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Dev"
        component={DevScreen}
        options={{
          title: "Dev",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={"code"}
              size={30}
              style={{ marginBottom: -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Hej Louise!";
    case "Ställning":
      return "Ställning i tävlingen";
  }
}
