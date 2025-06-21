// import { Text } from 'react-native'
// const TodoDetails = () => {
//   return (
//     <Text>TodoDetails</Text>
//   )
// }

// export default TodoDetails


import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const route = useRoute();
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.description}>{todo.description}</Text>
      <Text style={styles.status}>
        Status: {todo.completed ? "Completed" : "In Progress"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 18, marginBottom: 10 },
  status: { fontSize: 16, color: "#666" },
});

export default TodoDetails;
