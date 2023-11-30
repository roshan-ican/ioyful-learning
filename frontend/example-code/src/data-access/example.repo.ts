import { createExampleDTO } from '@/domain/example/example.schema'
import { exampleModel } from '@/data-access/models/example.model'

const getExamples = async () => {
  exampleModel.find({})
}

const getExample = async (id: string) => {
  exampleModel.findById({ id })
}

const createExample = async (newExample: createExampleDTO) => {
  return await exampleModel.create(newExample)
}

export { getExample, getExamples, createExample }
