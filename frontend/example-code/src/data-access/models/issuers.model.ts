import mongoose from 'mongoose'
import { Issuers } from '@/domain/issuers/issuers.schema'

const IssuersSchema = new mongoose.Schema<Issuers>({
    name: { type: String, required: true },
    program_type: { type: String, required: true },
    logo_url: { type: String, required: true },
    card_networks: { type: mongoose.Schema.Types.ObjectId, ref: 'CardNetworks' },
    status: { type: Boolean, required: true },
    card_reloadibility_type: { type: mongoose.Schema.Types.ObjectId, ref: 'CardReloadibility' }
});


export const issuersModel = mongoose.model<Issuers>('issuers', IssuersSchema)
