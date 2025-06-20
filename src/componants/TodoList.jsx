import TodoItem from "./TodoItem";
import { FlatList } from "react-native";

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
};

export default TodoList;
