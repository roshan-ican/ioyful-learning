import { updateCardNetworkSchemaRequestDTO, createCardNetworkSchemaRequestDTO } from '@/domain/issuers/issuers.schema'
import { CardNetworkModel } from '@/data-access/models/card-network.model'


const createCardNetwork = async (cardNetwork: createCardNetworkSchemaRequestDTO) => {
    return CardNetworkModel.create(cardNetwork)
}

const updateCardNetwork = async (id : any, cardNetwork: updateCardNetworkSchemaRequestDTO) => {
    return CardNetworkModel.updateOne({_id : id},{$set:cardNetwork});
}

export { createCardNetwork , updateCardNetwork };
