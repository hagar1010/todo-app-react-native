import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";

const TodoItem = ({ item, onComplate, onDelete }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(PATHS.DETAILS, { todo: item })}
    >
      <View style={styles.todoItem}>
        {item.completed ? (
          <Text style={{ textDecorationLine: "line-through", color: "#aaa" }}>
            {item.title}
          </Text>
        ) : (
          <Text>{item.title}</Text>
        )}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <EvilIcons name="trash" size={24} color="#fa69b4" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onComplate(item.id)}>
            <AntDesign
              name={item.completed ? "checkcircle" : "checkcircleo"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
