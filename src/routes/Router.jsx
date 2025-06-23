import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Completed from "../pages/Completed";
import Profile from "../pages/Profile";
import StackNavigator from "./StackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar, Text } from "react-native";

const Tab = createBottomTabNavigator();
export const PATHS = {
  HOME: "Home",
  COMPLETED: "Completed",
  PROFILE: "Profile",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#222"
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === PATHS.HOME) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === PATHS.COMPLETED) {
                iconName = focused
                  ? "checkmark-circle"
                  : "checkmark-circle-outline";
              } else if (route.name === PATHS.PROFILE) {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarLabel: ({ focused }) => (focused ? <Text style={{ color: "#fa69b4", fontSize: 10 }}>{route.name}</Text> : null),
            tabBarActiveTintColor: "#fa69b4",
            tabBarActiveBackgroundColor: "#333",
            tabBarStyle: {
              backgroundColor: "#222",
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            },
            headerStyle: {
              backgroundColor: "#222",
            },
            headerTitleStyle: {
              color: "#fafafa",
            }
          })}
        >
          <Tab.Screen
            name={PATHS.HOME}
            component={StackNavigator}
          />
          <Tab.Screen name={PATHS.COMPLETED} component={Completed} />
          <Tab.Screen name={PATHS.PROFILE} component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
