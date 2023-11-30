import mongoose from 'mongoose'
import { CardNetwork } from '@/domain/issuers/issuers.schema'


const CardNetworkSchema = new mongoose.Schema<CardNetwork>({
    name: { type: String, required: true },
    card_Type: [{ type: String }]
});

export const CardNetworkModel = mongoose.model('CardNetworks', CardNetworkSchema);
