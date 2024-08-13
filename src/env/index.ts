import 'dotenv/config'
import { z } from 'zod'

const environmentVariablesSchema = z.object({
  NODE_ENV: z.enum(['prod', 'test', 'dev']).default('dev'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
})

export const env = environmentVariablesSchema.parse(process.env)
