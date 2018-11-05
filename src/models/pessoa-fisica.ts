import mongoose from 'mongoose';
import { ContaSchema } from './conta';

const Schema = mongoose.Schema;

export const PessoaFisicaSchema = new Schema({
    nome: {
        type: String
    },
    idade: {
        type: Number
    },
    cpf: {
        type: String
    },
    conta: {type: [ContaSchema]},
});

export const PessoaFisica = mongoose.model('PessoaFisica', PessoaFisicaSchema);