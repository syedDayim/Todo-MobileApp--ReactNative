import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Input = ({ AddTodo }) => {
    const [text, setText] = useState(''); // Provide initial state value

    const changeHandler = (val) => {
        setText(val); // Update state with the new value
        
    };
    const handleDataSend = (text) => {
        AddTodo(text);
        setText(''); // Update state with the new value
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add Todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add Todo" onPress={() => handleDataSend(text)} color="coral" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginHorizontal: 20,
    },
    buttonContainer: {
        marginTop: 10, // Adjust margin as needed
        marginHorizontal: 20,
    },
});

export default Input;
