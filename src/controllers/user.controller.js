const user = require('../models/user')
const bcryptjs = require('bcryptjs')



module.exports = {
    async create(req, res) {
        try {

            const body = req.body
            // eslint-disable-next-line no-undef
            body.API_TOKEN = process.env.API_TOKEN
            const createUser = await user.create(body)

            res.status(201).send({
                createUser
            })
        } catch (error) {
            res.status(500).json({ mensagem: error.stack })
        }
    }
    ,
    async auth(req, res) {
        try {
            const { email, senha } = req.body;

            const authUser = await user.findOne({ email }).select('+ senha')

            if (!authUser) {
                return res.status(400).json({ mensagem: 'Usuário e/ou senha inválidos' })
            }
            
            if (!await bcryptjs.compare(senha, authUser.senha)) {
                return res.status(400).json({ mensagem: 'Usuário e/ou senha inválidos' })
            }
            authUser.senha = undefined

            const update = { ultimo_login: Date.now() }
            const filtro = { email: email }
            await user.findOneAndUpdate(filtro, update)

            const userRes = await user.findById(authUser._id)
            

            res.status(200).json({userRes})

        } catch (error) {
            res.status(500).json({ mensagem: error.stack })
        }
    },
    async busca(req, res) {
        try {

            const { id } = req.params;
            const receivedToken = req.headers.authorization.replace('bearer ', '')

            const authUser = await user.findById(id)

            if (!receivedToken) {
                res.status(401).json({ mensagem: 'Não autorizado' })
            }
            if (receivedToken != authUser.API_TOKEN) {
                res.status(401).json({ mensagem: 'Não autorizado' })
            }

            const dataAtual = new Date()
            

            const time = dataAtual - authUser.ultimo_login
            var resultInMinute = Math.round(time / 60000);
            console.log(resultInMinute)

            if (resultInMinute < 30) {
                res.status(400).json({ mensagem: 'Sessão Inválida' })
            }

            res.send(authUser)

        } catch (error) {
            res.status(500).json({ mensagem: error.stack })
        }
    }


}