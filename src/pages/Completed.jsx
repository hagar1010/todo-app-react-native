import { useSelector } from "react-redux";
import TodoItem from "../componants/TodoItem"
import { FlatList, Text, View } from "react-native";
import Container from "../componants/Container";
import styles from "../styles/styles";

const CompletedTasks = () => {
  const todos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.completed)
  );


  return (
    <Container>
      {todos.length === 0 ? (
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          color: '#222'  
        }}>No completed tasks</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      )}
    </Container>
  );
};

export default CompletedTasks;
