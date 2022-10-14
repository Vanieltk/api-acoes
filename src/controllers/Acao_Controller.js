const Acao = require ('../models/acoes.js')
module.exports = {
    async index(req, res) {
        try {
            const acoes = await Acao.find()

            return res.status(200).json(acoes);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    busca_id(req, res) {
        const id = req.params.id;
        Acao.findById(id, (err, acaoencontrada) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (acaoencontrada) {
                return res.json(acaoencontrada);
            }
            else {
                return res.status(404).json(
                    { Erro: "Ativo nao encontrado" }
                )
            }
        })
    },
    delete(req, res) {
        const id = req.params.id;
        Acao.findByIdAndDelete(id, (err, acaodeletada) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (acaodeletada) {
                return res.json(acaodeletada);
            }
            else {
                return res.status(404).json(
                    { Erro: "Ativo nao encontrado" }
                )
            }
        })
    },
    atualiza(req, res) {
        const id = req.params.id;
        const { _codigo, _nome} = req.body

        Acao.findByIdAndUpdate(id, _codigo, _nome, (err, acaoatualizada) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (acaoatualizada) {
                return res.json(acaoatualizada);
            }
            else {
                return res.status(404).json(
                    { Erro: "Ativo nao encontrado" }
                )
            }
        })
    },

    async create(req, res) {
        const { codigo, nome, setorid } = req.body
        try {
            const nova_acao = Acao.create({ codigo, nome, setorid})
            return res.status(200).json(nova_acao);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
}
