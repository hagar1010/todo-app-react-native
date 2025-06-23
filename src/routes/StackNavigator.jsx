import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./Router";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PATHS.HOME}
        component={Home}
        options={{
          headerShown: false,
          header: () => null,//
        }}
      />
      <Stack.Screen
        name={PATHS.DETAILS}
        component={TodoDetails}
        options={{
          headerTitle: "Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
