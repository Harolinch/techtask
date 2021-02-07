import BillStatus from './billStatus.enum';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface BillAttributes {
    userId: string,
    products: string[],
    status: BillStatus;
}

export interface BillDoc extends Document, BillAttributes { }

interface BillModel extends Model<BillDoc> { }

const billSchema = new Schema<BillDoc, BillModel>({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    status: { type: Number, enum: Object.values(BillStatus), default: BillStatus.UNPAID }
});

const Bill = mongoose.model<BillDoc, BillModel>('Bill', billSchema);

export default Bill;