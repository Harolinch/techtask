import BillStatus from '@enums/billStatus.enum';
import mongoose, { Document, Model, Schema, Types } from 'mongoose';

interface BillAttributes {
    userId: string,
    products: string[],
    status: BillStatus;
}

interface BillDoc extends Document, BillAttributes { }

interface BillModel extends Model<BillDoc> { }

const billSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [{ type: Types.ObjectId, ref: 'Product' }],
    status: { type: Number, enum: Object.values(BillStatus), default: BillStatus.UNPAID }
});

const Bill = mongoose.model<BillDoc, BillModel>('Bill', billSchema);

export default Bill;