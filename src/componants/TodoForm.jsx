import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/styles";
import {useState} from "react";
const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),//
      title,
      description,
      completed: false,
    };
    onSubmit(todo);
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

      <View style={styles.dividerLine}></View>


      {/* Category */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.filterBtn, { backgroundColor: "#fa69b4" }]}
        >
          <Text style={[styles.filterText, { color: "#fafafa" }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.filterBtn}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.filterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine}></View>
    </View>
  );
};

export default TodoForm;
