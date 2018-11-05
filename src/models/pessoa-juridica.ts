import mongoose from 'mongoose';
import { ContaSchema } from './conta';

const Schema = mongoose.Schema;

export const PessoaJuridicaSchema = new Schema({
    nome: {
        type: String
    },
    idade: {
        type: Number
    },
    cnpj: {
        type: String
    },
    conta: {type: [ContaSchema]},
});

export const PessoaJuridica = mongoose.model('PessoaJuridica', PessoaJuridicaSchema);