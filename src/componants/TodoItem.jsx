import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/styles";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import { useDispatch } from "react-redux";
import {toggleCompleted, deleteTodo } from "../redux/slices/TodosSlice";


const TodoItem = ({ todo }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const confirmDelete = (id) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => dispatch(deleteTodo(id))
        },
      ],
      { cancelable: true }
    );
  };
  
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(PATHS.DETAILS, { todo: todo })}
    >
      <View style={styles.todoItem}>
        {todo.completed ? (
          <Text style={{ textDecorationLine: "line-through", color: "#aaa" }}>
            {todo.title}
          </Text>
        ) : (
          <Text>{todo.title}</Text>
        )}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => confirmDelete(todo.id)}>
            <EvilIcons name="trash" size={24} color="#fa69b4" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(toggleCompleted(todo.id))}
          >
            <AntDesign
              name={todo.completed ? "checkcircle" : "checkcircleo"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
