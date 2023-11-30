import { createKits } from '@/data-access/kits.repo'

const createKitsUseCase = async (kitsData: any) => {
  const savedKits = await createKits(kitsData)

  return savedKits
}

export default createKitsUseCase
