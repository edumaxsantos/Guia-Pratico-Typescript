import { Core } from "./core";

/**
 * Model de podcasts
 * @type url {String} url do podcast
 * @type duracao {String} tempo do podcast
 */
export class Podcasts extends Core {
  constructor(
    readonly titulo: String,
    readonly texto: String,
    readonly imagem: String,
    readonly dataPublicacao: Date,
    readonly tags: String,
    readonly link: String,
    readonly ativo: Boolean,
    readonly url: String,
    readonly duracao: String
  ) {
    super(titulo, texto, imagem, dataPublicacao, tags, link, ativo);
  }
}
