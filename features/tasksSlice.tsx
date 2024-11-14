import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  name: string
  description: string
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ name: string; description: string }>) => {
      state.tasks.push({
        id: Date.now().toString(),
        name: action.payload.name,
        description: action.payload.description,
      })
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
  },
})

export const { addTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer