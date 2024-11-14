import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <View style={styles.container}>
      <TaskForm />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem id={item.id} name={item.name} description={item.description} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
})

export default TaskList