import { Router } from "express";
import { AuthUtil } from "../util/auth";

export class Conta {
    public rotas(): Router {
        let router = Router();

        router.all('*', AuthUtil.estaAutenticado);

        router.get('/', (req:any, res:any) => {
            res.json(req.pessoa.contas)
        });
        router.post('/', (req:any, res:any) => {
            req.pessoa.contas.push(new Conta());
            req.pessoa.save((erro: any, pessoa: any) => {
                if (erro) res.send(erro)
                else res.json(pessoa)
            })
        });

        return router;
    }
}