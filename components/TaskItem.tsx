import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasksSlice'

interface TaskItemProps {
  id: string
  name: string
  description: string
}

const TaskItem: React.FC<TaskItemProps> = ({ id, name, description }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button title="X" color="red" onPress={() => dispatch(deleteTask(id))} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#777',
  },
})

export default TaskItem