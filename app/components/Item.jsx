import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ taskItem, onDelete }) => {


    return (
        <Pressable style={styles.listItemContainer} onPress={() => onDelete(taskItem.id)}>
            <Text style={styles.listItemText}>{taskItem.task}</Text>
        </Pressable>
    )
}

export default Item

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
