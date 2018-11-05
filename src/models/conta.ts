import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContaSchema = new Schema({
    saldo: {
        type: String
    }
});

export const Conta = mongoose.model('Conta', ContaSchema);