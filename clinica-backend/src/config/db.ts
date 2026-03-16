import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Tenta conectar ao MongoDB usando o endereço que colocamos no .env
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;