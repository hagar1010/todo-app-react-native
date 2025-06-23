import TodoItem from "./TodoItem";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { FILTRATION_TYPES } from "../redux/slices/TodosSlice";

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todos);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todos?.filter((todo) => {
          if (filter === FILTRATION_TYPES.ALL) return true;
          if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
          if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
        })}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

export default TodoList;
