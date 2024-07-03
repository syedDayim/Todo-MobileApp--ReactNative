import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

const Item = ({ taskItem, onDelete }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.taskTitle}>{taskItem.task}</Text>
                    <Pressable onPress={() => onDelete(taskItem.id)} style={styles.deleteButton}>
                        <MaterialIcons name="delete" size={20} color="white" />
                    </Pressable>
                </View>
                <View style={styles.cardDetails}>
                    <View style={styles.detailItem}>
                        <Feather name="calendar" size={16} color="#007bff" />
                        <Text style={styles.detailText}>Due: 12/31/2024</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <FontAwesome5 name="flag" size={16} color="#007bff" />
                        <Text style={styles.detailText}>Priority: High</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardContent: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    deleteButton: {
        backgroundColor: '#ff4d4f',
        padding: 5,
        borderRadius: 5,
    },
    cardDetails: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 10,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    detailText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#555',
    },
});
