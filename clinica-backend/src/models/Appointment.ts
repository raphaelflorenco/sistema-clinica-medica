import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  pacienteId: mongoose.Types.ObjectId;
  dataConsulta: string;
  horario: string;
  cep: string;
  enderecoCompleto?: string;
  alertaClima?: string;
  status: 'agendado' | 'cancelado' | 'realizado';
}

const AppointmentSchema: Schema = new Schema({
  pacienteId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dataConsulta: { type: String, required: true },
  horario: { type: String, required: true },
  cep: { type: String, required: true },
  enderecoCompleto: { type: String },
  alertaClima: { type: String },
  status: { type: String, enum: ['agendado', 'cancelado', 'realizado'], default: 'agendado' }
}, { timestamps: true });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);