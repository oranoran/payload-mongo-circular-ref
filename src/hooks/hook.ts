import * as mongoDB from 'mongodb'
import { Todo } from '../payload-types'
// import { Todo } from '../payload-types-modified'

export type TodoCollection = mongoDB.Collection<Todo>

export async function theHook() {
  const mongodbUrl = process.env.MONGODB_URI ?? ''
  const client = new mongoDB.MongoClient(mongodbUrl)
  await client.connect()
  const db = client.db(process.env.DB_NAME)
  const todos: TodoCollection = db.collection('todos')
  todos.find({}, { projection: { _id: 1 } })
  todos.updateMany({}, { $set: { a: 'b' } }, { upsert: false })
}
