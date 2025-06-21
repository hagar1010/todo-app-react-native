import TodoItem from "./TodoItem";
import { FlatList } from "react-native";

const TodoList = ({ todos,onComplate,onDelete }) => {
  return (
    <FlatList
      style={{ marginBottom: 20 }}
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <TodoItem item={item} onComplate={onComplate} onDelete={onDelete}/>}
    />
  );
};

export default TodoList;
