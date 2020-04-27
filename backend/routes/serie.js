/**
 * @file: serie.js
 * @author: Paulo Alves
 * @description: responsável pela atribuição das rotas da aplicação no backend.
 * @version 1.0.1(27/04/2020)
 */

import express from 'express'
const router = express.Router()

import Serie from '../models/serie'

/**
 * @description: POST - rota responsável por adicionar serie.
 */
router.post('/nova-serie', async(req, res) => {
    const body = req.body
    try {
        const serieDB = await Serie.create(body)
        res.status(200).json(serieDB)
    } catch (error) {
        return res.status(500).json({
            message: 'Erro ao inserir serie!',
            error
        })
    }
})

/**
 * @description: GET - rota responsável por pesquisar todas as series.
 */
router.get('/serie', async(req, res) => {
    try {
        const serieDB = await Serie.find()
        res.json(serieDB)
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao pesquisar as series!',
            error
        })
    }
})

/**
 * @description: GET - rota responsável por pesquisar serie por id.
 */
router.get('/serie/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const serieDB = await Serie.findOne({_id})
        res.json(serieDB)
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao pesquisar a serie!',
            error
        })
    }
})

/**
 * @description: PUT - rota responsável por atualizar serie por id.
 */
router.put('/serie/:id', async(req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const serieDB = await Serie.findByIdAndUpdate(
            _id,
            body,
            {new: true})
        res.json(serieDB)
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao atualizar a serie!',
            error
        })
    }
})

/**
 * @description: DELETE - rota responsável por excluir serie por id.
 */
router.delete('/serie/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const serieDB = await Serie.findByIdAndDelete({_id})
        if(!serieDB){
            return res.status(400).json({
                message: 'Não foi posivel encontrar o id da serie!',
                error
            })
        }
        res.json(serieDB)
    } catch (error) {
        return res.status(400).json({
            message: 'Erro ao excluir a serie',
            error
        })
    }
})

module.exports = router
