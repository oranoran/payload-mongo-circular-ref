import path from 'path'
import { buildConfig } from 'payload/config';
import TodoLists from './collections/TodoLists';
import Users from './collections/Users';

const hooksJs = path.resolve(
  __dirname,
  'hooks/hook.js'
)
const hooksTs = path.resolve(
  __dirname,
  'hooks/hook.ts'
)
const hooksMock = path.resolve(
  __dirname,
  'hooks/mock-hook.js'
)

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          [hooksJs]: hooksMock,
          [hooksTs]: hooksMock,
        },
      },
    }),
  },
  collections: [
    TodoLists,
    Users,
  ],
});
