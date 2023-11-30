import { createIssuers } from '@/data-access/issuers.repo'
import { createCardNetwork } from '@/data-access/card-network.repo'
import { createCardReloadibility } from '@/data-access/card-reloadibility.repo'
// import { createSlab } from '@/data-access/slab.repo'
// import { createfixed } from '@/data-access/fixed.repo'

import { createIssuersRequestDTO } from '@/domain/issuers/issuers.schema'

const createIssuersUseCase = async (addIssuers: createIssuersRequestDTO) => {

  if ((!addIssuers?.card_reloadibility_type?.fixed && !addIssuers?.card_reloadibility_type?.slab) || (addIssuers?.card_reloadibility_type?.fixed && addIssuers?.card_reloadibility_type?.slab)) {
    // Need to send 400 status code 
    throw new Error('Either slab or fixed must be present, but not both.');
  }

  const card_reloadibility_type = addIssuers.card_reloadibility_type;
  const card_networks = addIssuers.card_networks;

  const CardReloadibilityTypePromise = createCardReloadibility(card_reloadibility_type);
  const CardNetworksPromise = createCardNetwork(card_networks);
  const [savedCardReloadibilityType, savedCardNetworks] = await Promise.all([CardReloadibilityTypePromise, CardNetworksPromise]);

  addIssuers.card_networks = savedCardNetworks;
  addIssuers.card_reloadibility_type = savedCardReloadibilityType;

  const savedIssuer = await createIssuers(addIssuers);

  return savedIssuer;
}

export default createIssuersUseCase;
