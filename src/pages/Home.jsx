import TodoForm from "../componants/TodoForm";
import TodoList from "../componants/TodoList";
import styles from "../styles/styles";
import FilterTabs from "../componants/FilterTabs";
import { Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, saveTodos } from "../redux/slices/TodosSlice";
import Container from "../componants/Container";

const Home = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: "1",
  //     title: "Buy groceries",
  //     description: "Milk, Bread, Eggs",
  //     completed: false,
  //   },
  //   {
  //     id: "2",
  //     title: "Walk the dog",
  //     description: "30 minutes in the park",
  //     completed: false,
  //   },
  //   {
  //     id: "3",
  //     title: "Finish homework",
  //     description: "Math exercises and reading",
  //     completed: false,
  //   },
  //   {
  //     id: "4",
  //     title: "Call mom",
  //     description: "Check in and see how she is doing",
  //     completed: false,
  //   },
  //   {
  //     id: "5",
  //     title: "Clean the house",
  //     description: "Living room, kitchen, and bathroom",
  //     completed: false,
  //   },
  // ]);
  // const TODOS = "@todos";

  //   useEffect(() => {
  //     const loadTodos = async () => {
  //       try {
  //         const storedTodos = await AsyncStorage.getItem(TODOS);
  //         if (storedTodos !== null) {
  //           setTodos(JSON.parse(storedTodos));
  //         }
  //       } catch (error) {
  //         console.error("Failed to load todos", error);
  //       }
  //     };
  //     loadTodos();
  //   }, []);

  //   useEffect(() => {
  //     const saveTodos = async () => {
  //       try {
  //         await AsyncStorage.setItem(TODOS, JSON.stringify(todos));
  //       } catch (error) {
  //         console.error("Failed to save todos", error);
  //       }
  //     };
  //     saveTodos();
  //   }, [todos]);

  // const handleToggleComplete = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };
  // const handleDelete = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };
  // const [filter, setFilter] = useState("All");
  // const filteredTodos = todos.filter((todo) => {
  //   if (filter === "All") return true;
  //   if (filter === "Progress") return !todo.completed;
  //   if (filter === "Done") return todo.completed;
  // });

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveTodos(todos));
  }, [todos]);

  return (
    <Container>
      <Text style={styles.title}>TO-DO APP</Text>

      <TodoForm />

      <FilterTabs />

      <TodoList />
    </Container>
  );
};

export default Home;
