/**
 * Model de fotos
 * @type thumb {String} foto principal
 * @type thumbNail {String} foto menor
 * @type credito {String} quem tirou a foto
 * @type legenda {String} descrição da foto
 */
export class Fotos {
  constructor(
    readonly thumb: String,
    readonly thumbNail: String,
    readonly credito: String,
    readonly legenda: String
  ) {}
}
