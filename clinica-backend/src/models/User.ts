import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  nome: string;
  email: string;
  senhaHash: string;
  cargo: 'paciente' | 'secretario';
}

const UserSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senhaHash: { type: String, required: true },
  cargo: { type: String, enum: ['paciente', 'secretario'], default: 'paciente' }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);