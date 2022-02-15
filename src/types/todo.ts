import { TodoTask } from './todo-task'

export interface Todo {
  id: string
  listName?: string
  tasks?: TodoTask[]
}
