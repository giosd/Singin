const mongoose = require('../database')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    telefones: [{
        ddd: {
            type: Number
        }, numero: {
            type: Number
        }
    }],
    ultimo_login: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    API_TOKEN: {
        type: String
    }

})

userSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 10)
    this.senha = hash

    next()
})

const user = mongoose.model('User', userSchema)

module.exports = user