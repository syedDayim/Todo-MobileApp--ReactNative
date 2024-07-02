import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./components/Item";
import Input from "./components/Input";

export default function Index() {
  const initialItems = [
    { task: "Learn React Native", id: "1" },
    { task: "Learn Routing", id: "2" },
    { task: "Make Projects", id: "3" },
  ];

  const [tasks, setTasks] = useState(initialItems);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const AddTodo = (todo) => {
    if (todo.length > 3) {
      setTasks((prevTodos) => {
        return [
          { task: todo, id: Math.floor(Math.random() * 1000).toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Opps", "Text Must be over 3 characters", [
        { text: "understood", onPress: () => console.log("Closed") },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input AddTodo={AddTodo} />

      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Add todo above</Text>
        </View>
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={tasks}
          keyExtractor={(item) => item.id} // Ensure keyExtractor is correctly defined
          renderItem={({ item }) => (
            <Item taskItem={item} onDelete={() => handleDelete(item.id)} />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
