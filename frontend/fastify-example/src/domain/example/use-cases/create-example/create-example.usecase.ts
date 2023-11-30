import { createExample } from '@/data-access/example.repo'
import { createExampleDTO } from '@/domain/example/example.schema'

const createExampleUseCase = async (newExample: createExampleDTO) => {
  const newExampleCreated = await createExample(newExample)
  if (!newExampleCreated) {
    throw new Error('Error creating example')
  }

  return newExampleCreated
}

export default createExampleUseCase
