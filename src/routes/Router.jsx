import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Completed from "../pages/Completed";
import Profile from "../pages/Profile";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();
export const PATHS = {
  HOME: "Home",
  COMPLETED: "Completed",
  PROFILE: "Profile",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={PATHS.COMPLETED} component={Completed} />
        <Tab.Screen name={PATHS.PROFILE} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
