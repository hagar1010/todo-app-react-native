import TodoForm from "../componants/TodoForm";
import TodoList from "../componants/TodoList";
import styles from "../styles/styles";
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Buy groceries",
      description: "Milk, Bread, Eggs",
      completed: false,
    },
    {
      id: "2",
      title: "Walk the dog",
      description: "30 minutes in the park",
      completed: false,
    },
    {
      id: "3",
      title: "Finish homework",
      description: "Math exercises and reading",
      completed: false,
    },
    {
      id: "4",
      title: "Call mom",
      description: "Check in and see how she is doing",
      completed: false,
    },
    {
      id: "5",
      title: "Clean the house",
      description: "Living room, kitchen, and bathroom",
      completed: false,
    },
  ]);
  const TODOS = "@todos";
  //-----------load
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(TODOS);
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };

    loadTodos();
  }, []);

  //-----------save
  useEffect(() => {
  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(TODOS, JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos", error);
    }
  };

  saveTodos();
}, [todos]);


  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const [filter, setFilter] = useState("All");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Progress") return !todo.completed;
    if (filter === "Done") return todo.completed;
  });
  return (
    <>
     <ScrollView>
       {/* <ImageBackground
        source={require("../../assets/20.png")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      > */}
      <View style={styles.container}>
        <Text style={styles.title}>TO-DO APP</Text>

        <TodoForm setTodos={setTodos} />

        <View style={styles.dividerLine}></View>

        {/* Category */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterBtn,
              filter === "All" && { backgroundColor: "#fa69b4" },
            ]}
            onPress={() => setFilter("All")}
          >
            <Text
              style={[
                styles.filterText,
                filter === "All" && { color: "#fafafa" },
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterBtn,
              filter === "Progress" && { backgroundColor: "#fa69b4" },
            ]}
            onPress={() => setFilter("Progress")}
          >
            <Text
              style={[
                styles.filterText,
                filter === "Progress" && { color: "#fafafa" },
              ]}
            >
              In Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterBtn,
              filter === "Done" && { backgroundColor: "#fa69b4" },
            ]}
            onPress={() => setFilter("Done")}
          >
            <Text
              style={[
                styles.filterText,
                filter === "Done" && { color: "#fafafa" },
              ]}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.dividerLine}></View> */}

        {todos.length > 0 && (
          <TodoList
            todos={filteredTodos}
            onComplate={(id) => handleToggleComplete(id)}
            onDelete={(id) => handleDelete(id)}
          />
        )}
      </View>
      {/* </ImageBackground>  */}
    </ScrollView>
    </>
  );
};

export default Home;
