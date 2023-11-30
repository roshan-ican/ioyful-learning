import { findKitsRequest } from '@/data-access/kits-requests.repo'
import {
  getUnassignedKits,
  updateBulkKits
} from '@/data-access/kits.repo'

const updateBulkKitsUseCase = async (clientId: any, kitsRequestId: any) => {
    const kitsRequest = await findKitsRequest(kitsRequestId);


    if(!kitsRequest) throw new Error("Kits request not found");

    if(kitsRequest.status !== 'APPROVED'){
      throw new Error('Invalid kit request');
    }

    const unAssignedKits = await getUnassignedKits(kitsRequest.request_count, kitsRequest.kit_type);

    if(unAssignedKits.length < kitsRequest.request_count){
      throw new Error("Kits not available");
    }
    for(const kits of unAssignedKits){
        kits.assigned_client_id = kitsRequest.client_id;
    }

    await updateBulkKits(unAssignedKits);
}

export default updateBulkKitsUseCase
