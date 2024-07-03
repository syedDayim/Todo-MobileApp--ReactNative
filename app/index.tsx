import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
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
    Alert.alert(
      "Delete Task",
      "Do you really want to delete this task?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes", 
          onPress: () => {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
          }
        }
      ],
      { cancelable: false }
    );
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
      Alert.alert("Oops", "Text must be over 3 characters", [
        { text: "Understood", onPress: () => console.log("Closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Input AddTodo={AddTodo} />

          {tasks.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text>Add todo above</Text>
            </View>
          ) : (
            <FlatList
              style={{ marginTop: 20 }}
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Item taskItem={item} onDelete={() => handleDelete(item.id)} />
              )}
            />
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
