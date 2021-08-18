import { Core } from "./core";

/**
 * Model de news
 * @type chapeu {String} titulo menor
 * @type autor {String} quem escreveu a notícia
 */
export class News extends Core {
  constructor(
    readonly titulo: String,
    readonly texto: String,
    readonly imagem: String,
    readonly dataPublicacao: Date,
    readonly tags: String,
    readonly link: String,
    readonly ativo: Boolean,
    readonly chapeu: String,
    readonly autor: String
  ) {
    super(titulo, texto, imagem, dataPublicacao, tags, link, ativo);
  }
}
