import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/styles";
import {useDispatch} from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/slices/TodosSlice";
const TodoForm = () => {//{ setTodos }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  // const handleAddTodo = (todo) => {
  //   setTodos((prevTodos) => [...prevTodos, todo]);
  // };

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(), //
      title,
      description,
      completed: false,
    };
    // handleAddTodo(todo);
    dispatch(addTodo(todo));
    setTitle("");
    setDescription("");
  };

  return (
    <View>
      <TextInput
        placeholder="Todo Title"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={(val) => setTitle(val)}
        value={title}
      />
      <TextInput
        placeholder="Todo Description"
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={(val) => setDescription(val)}
        value={description}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.9}
        style={styles.submitBtn}
      >
        <Text style={styles.submitBtnText}>Save To-Do</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
