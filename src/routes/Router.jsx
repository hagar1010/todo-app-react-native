import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Completed from "../pages/Completed";
import Profile from "../pages/Profile";
import StackNavigator from "./StackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { StatusBar } from "expo-status-bar";
import { StatusBar} from "react-native";

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
        translucent={false}
        barStyle="light-content"
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
            // tabBarLabel: ({ focused }) => (focused ? route.name : null),
            tabBarActiveTintColor: "#fa69b4",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              // paddingVertical: 50,
              backgroundColor: "#222",
              // borderTopWidth: 0,
              // position: "absolute",
              // bottom: 0,
              // left: 0,
              // right: 0,
              height: 70,
            },
          })}
        >
          <Tab.Screen
            name={PATHS.HOME}
            component={StackNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name={PATHS.COMPLETED} component={Completed} />
          <Tab.Screen name={PATHS.PROFILE} component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
