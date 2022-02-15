import { CollectionConfig } from 'payload/types'
import { theHook } from '../hooks/hook'

const Todo: CollectionConfig = {
  slug: 'todos',
  admin: {
    defaultColumns: ['listName', 'tasks', 'updatedAt'],
    useAsTitle: 'listName',
  },
  hooks: {
    afterChange: [theHook],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'listName',
      type: 'text',
    },
    {
      name: 'tasks',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'relatedList',
          type: 'relationship',
          relationTo: 'todos',
        },
        {
          name: 'complete',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}

export default Todo
