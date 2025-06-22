import { useSelector } from "react-redux";
import TodoItem from "../componants/TodoItem"
import styles from "../styles/styles";//
import { FlatList, Text, View } from "react-native";

const CompletedTasks = () => {
  const todos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.completed)
  );


  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        // <View style={styles.container}>
          <Text>No completed tasks</Text>
        // </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      )}
    </View>
  );
};

export default CompletedTasks;
