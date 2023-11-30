import { getClientByEmail } from '@/data-access/clients.repo'

const getClientByEmailId = async (emailId: string) => {
  const client = await getClientByEmail(emailId)
  if (!client) {
    throw new Error('Error in fetching clients')
  }
  return client
}

export default getClientByEmailId
