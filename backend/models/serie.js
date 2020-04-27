/**
 * @file: serie.js
 * @author: Paulo Alves
 * @description: responsável pela atribuição do esquema e modelo de dados para o objeto Serie.
 * @version 1.0.1(27/04/2020)
 */

import mongoose, { mongo } from "mongoose"
const Schema = mongoose.Schema

/**
 * @param {Schema} serieSchema - parâmetro para representar o esquema do objeto serie.
 * @description: definição do esquema serie e suas propriedades.
 */
const serieSchema = new Schema({
  titulo: { type: String, required: [true, "O título é obrigatório!"] },
  genero: String,
  temporadas: Number,
})

const Serie = mongoose.model("Serie", serieSchema)
export default Serie
