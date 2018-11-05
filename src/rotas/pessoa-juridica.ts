import { Router } from "express";
import { PessoaJuridica } from "../models/pessoa-juridica";

export class PessoasJuridicas {
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            PessoaJuridica.find({}, (erro, carros) => {
                if (erro) res.send(erro)
                else res.json(carros)
            })
        });
        router.get('/:id', (req, res) => {
            PessoaJuridica.findById(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.post('/', (req, res) => {
            new PessoaJuridica(req.body).save((erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.put('/:id', (req, res) => {
            PessoaJuridica.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.delete('/:id', (req, res) => {
            PessoaJuridica.findByIdAndRemove(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });

        return router;
    }
}