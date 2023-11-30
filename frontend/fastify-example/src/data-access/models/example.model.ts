import mongoose from 'mongoose'
import { Example } from '@/domain/example/example.schema'

const exampleSchema = new mongoose.Schema<Example>({})

export const exampleModel = mongoose.model<Example>('example', exampleSchema)
