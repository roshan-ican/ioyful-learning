import { updateIssuers
  // ,getIssuer 
} from '@/data-access/issuers.repo'
import { updateCardNetwork } from '@/data-access/card-network.repo'
import { updateCardReloadibility } from '@/data-access/card-reloadibility.repo'


import { updateIssuersRequestDTO } from '@/domain/issuers/issuers.schema'

const updateUsersUseCase = async (issuer: updateIssuersRequestDTO) => {

if(issuer?.card_reloadibility_type?.fixed && issuer?.card_reloadibility_type?.slab){
    throw new Error( 'Cannot have both fixed and slab rates');
}

let updateCardNetworkPromise;
if(issuer?.card_networks) { 
  updateCardNetworkPromise  = updateCardNetwork(issuer?.card_networks?._id, issuer.card_networks);
}

let updateCardReloadibilityPromise;

if(issuer?.card_reloadibility_type){
  updateCardReloadibilityPromise = updateCardReloadibility(issuer?.card_reloadibility_type?._id, issuer.card_reloadibility_type);
}

const updatedIssuerPromise = updateIssuers(issuer._id,issuer);


await Promise.all([updatedIssuerPromise, updateCardNetworkPromise, updateCardReloadibilityPromise ]);

}

export default updateUsersUseCase;
