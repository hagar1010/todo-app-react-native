import TodoItem from "./TodoItem";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { FILTRATION_TYPES } from "../redux/slices/TodosSlice";

const TodoList = () => {
    const { todos, filter } = useSelector((state) => state.todos);
    
  return (
    <FlatList
      data={todos?.filter((todo) => {
        if (filter === FILTRATION_TYPES.ALL) return true;
        if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
        if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
      })}
      style={{ marginBottom: 15 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};

export default TodoList;
