import mongoose from 'mongoose'
import { CardReloadibility , Slab, Fixed} from '@/domain/issuers/issuers.schema'


const SlabSchema = new mongoose.Schema<Slab>({
    min_amount: { type: Number, required: false },
    max_amount: { type: Number, required: false },
    bank_share: { type: Number, required: false }
});

const FixedSchema = new mongoose.Schema<Fixed>({
    bank_share: { type: Number, required: false }
});


const CardReloadibilitySchema = new mongoose.Schema<CardReloadibility>({
    name: { type: String, required: true },
    slab: [SlabSchema],
    fixed: FixedSchema
});

export const CardReloadibilityModel = mongoose.model('CardReloadibility', CardReloadibilitySchema);
