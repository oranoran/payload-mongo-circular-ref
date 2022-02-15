import { Todo } from './todo'

export interface TodoTask {
  name?: string
  relatedList?: string | Todo
  complete?: boolean
  id?: string
}
