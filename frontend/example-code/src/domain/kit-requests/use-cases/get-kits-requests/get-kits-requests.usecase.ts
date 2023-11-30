import {
 getKitsRequests,
} from '@/data-access/kits-requests.repo'

const getKitsRequestsUseCase = async () => {

  return await getKitsRequests();
}


export default getKitsRequestsUseCase
