import TodoForm from "../componants/TodoForm";
import TodoList from "../componants/TodoList";
import styles from "../styles/styles";
import { useState } from "react";

import { Text, ImageBackground, View } from "react-native";
const Home = () => {
  const [todos, setTodos] = useState([
    { id: "1", title: "Buy groceries", description: "Milk, Bread, Eggs" },
    { id: "2", title: "Walk the dog", description: "30 minutes in the park" },
    {
      id: "3",
      title: "Finish homework",
      description: "Math exercises and reading",
    },
    {
      id: "4",
      title: "Call mom",
      description: "Check in and see how she is doing",
    },
    {
      id: "5",
      title: "Clean the house",
      description: "Living room, kitchen, and bathroom",
    },
  ]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/20.png")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>TO-DO APP</Text>


          <TodoForm onSubmit={(todo) => handleAddTodo(todo)} />
          {todos.length > 0 && <TodoList todos={todos} />}


        </View>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default Home;
