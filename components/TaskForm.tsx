import React, { useState, useRef } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasksSlice'

const TaskForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const descriptionRef = useRef<TextInput>(null)

  const handleAddTask = () => {
    if (name.trim() && description.trim()) {
      dispatch(addTask({ name, description }))
      setName('')
      setDescription('')
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        onSubmitEditing={() => descriptionRef.current?.focus()}
      />
      <TextInput
        ref={descriptionRef}
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        onSubmitEditing={handleAddTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
})

export default TaskForm