const User = require('../models/User')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {

    async index(req, res) {
        try {
            const users = await User.find({})

            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async create(req, res) {
        const { nome, senha} = req.body

        try {
            const hash = bcrypt.hashSync(senha, 10);
            const novo_user = User.create({ nome, senha: hash })
            return res.status(200).json(novo_user);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async login(req, res) {
        // faz a desestruturação do objeto req.body
        const { nome, senha } = req.body;

        // validação para os campos
        if (!nome || !senha) {
            //      res.status(400).json({ erro: "Enviar email, senha do usuário" });
            res.status(400).json({ erro: "Login ou senha incorretos" });
            return;
        }
        // verifica se o e-mail já está cadastrado
        try {

            const dados = await User.findOne({ nome });

            if (!dados) {
                res.status(400).json({ erro: "Login ou senha incorretos" });
                return;
            }

            if (bcrypt.compareSync(senha, dados.senha)) {

                const token = jwt.sign({
                    usuario_id: dados.id,
                    usuario_nome: dados.nome
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "8h"
                    }
                )

                res.status(200).json({ nome: dados.nome, token });
            } else {
                //res.status(400).json({ erro: "Senha Incorreta" });
                res.status(400).json({ erro: "Login ou senha incorretos" });
            }
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },
}
