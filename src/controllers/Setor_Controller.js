const Setor = require('../models/setores')

module.exports = {
    async index(req, res) {
        try {
            const setores = await Setor.find()

            return res.status(200).json(setores);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    buscaid(req, res) {
        const id = req.params.id;
        Setor.findById(id, (err, setorencontrado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (setorencontrado) {
                return res.json(setorencontrado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },
    delete(req, res) {
        const id = req.params.id;
        Setor.findByIdAndDelete(id, (err, setordeletado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (setordeletado) {
                return res.json(setordeletado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },
    atualiza(req, res) {
        const id = req.params.id;
        const { _setor } = req.body

        Setor.findByIdAndUpdate(id, _setor, (err, setoratualizado) => {

            if (err) {
                res.status(500).send(err);
            }
            else if (setoratualizado) {
                return res.json(setoratualizado);
            }
            else {
                return res.status(404).json(
                    { Erro: "Produto nao encontrado" }
                )
            }
        })
    },

    async create(req, res) {
        const { setor } = req.body
        try {
            const novosetor = Setor.create({ setor })
            return res.status(200).json(novosetor);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
}