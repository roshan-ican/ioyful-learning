import { createCardReloadibilitySchemaRequestDTO, updateCardReloadibilitySchemaRequestDTO } from '@/domain/issuers/issuers.schema'
import { CardReloadibilityModel } from '@/data-access/models/card-reloadibility.model'


const createCardReloadibility = async (cardReloadibility: createCardReloadibilitySchemaRequestDTO) => {
    return CardReloadibilityModel.create(cardReloadibility)
}

const updateCardReloadibility = async (id : any, cardReloadibility: updateCardReloadibilitySchemaRequestDTO) => {
    return CardReloadibilityModel.updateOne({_id : id},{$set:cardReloadibility});
}

export { createCardReloadibility,updateCardReloadibility }
