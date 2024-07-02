import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const items = [
    { task: "Learn React Native", id: "1" },
    { task: "Learn Routing", id: "2" },
    { task: "Make Projects", id: "3" },
  ];

  const [tasks, setTasks] = useState(items);

  return (
    <SafeAreaView>
      {/* Text Input will go here */}
      {/* List of Todo will go here */}

      <FlatList
        style={{ marginTop: 60 }}
        data={tasks}
        keyExtractor={(item) => item.id} // Convert id to string
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItemText}>{item.task}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  listItemText: {
    fontWeight: "700",
    fontSize: 15,
  },
});
