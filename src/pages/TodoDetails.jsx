import { Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/slices/TodosSlice";
import Container from "../componants/Container";
import styles from "../styles/styles";

const TodoDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { todo } = route.params;

  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.todos);

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Title is required");
      return;
    }
    dispatch(updateTodo({
      id: todo.id,
      updates: {
        title,
        description,
      }
    }));
    navigation.goBack();
  };

  return (
    <Container>
      <Text style={[styles.label, { marginTop: 15 }]}>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textArea]}
      />

      <Text style={styles.status}>
        Status: {todo.completed ? "Completed" : "In Progress"}
      </Text>

      <TouchableOpacity activeOpacity={0.7} onPress={handleSave} style={styles.submitBtn} >
        <Text style={styles.submitBtnText}>Save Changes</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default TodoDetails;

