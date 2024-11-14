import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  )
}