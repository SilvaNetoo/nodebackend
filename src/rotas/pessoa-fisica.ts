import { Router } from "express";
import { PessoaFisica } from "../models/pessoa-fisica";
import { Conta } from "./conta";

export class PessoasFisicas {
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            PessoaFisica.find({}, (erro, carros) => {
                if (erro) res.send(erro)
                else res.json(carros)
            })
        });
        router.get('/:id', (req, res) => {
            PessoaFisica.findById(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.post('/', (req, res) => {
            new PessoaFisica(req.body).save((erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.put('/:id', (req, res) => {
            PessoaFisica.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.delete('/:id', (req, res) => {
            PessoaFisica.findByIdAndRemove(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });

        router.use('/:id/contas', (req: any, res: any, next) => {
            PessoaFisica.findById(req.params.id, (erro, livro) => {
                if (erro) res.send(erro)
                else req.livro = livro
                next()
            }).populate('contas');
        }, new Conta().rotas());

        return router;
    }
}