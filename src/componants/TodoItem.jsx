import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";

const TodoItem = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate(PATHS.DETAILS, { todo: item })}>
      <View style={styles.todoItem}>
        <Text>{item.title}</Text>
        <EvilIcons name="trash" size={24} color="red" />
        <AntDesign name="checkcircleo" size={24} color="green" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
