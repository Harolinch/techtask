import UserType from './userType.enum';
import mongoose, { Document, Model, Schema, Types } from 'mongoose';

interface UserAttributes {
    name: string,
    email: string,
    password: string;
    createdAt: Date;
    type: UserType;
}

export interface UserDoc extends Document, UserAttributes { }

interface UserModel extends Model<UserDoc> { }

const userlSchema = new Schema<UserDoc, UserModel>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        enum: Object.values(UserType),
        default: UserType.CUSTOMER,
    },
}, { timestamps: true });

const User = mongoose.model<UserDoc, UserModel>('User', userlSchema);

export default User;