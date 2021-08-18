import { Core } from "./core";

/**
 * Model de vídeo
 * @type url {String} url do vídeo
 * @type duracao {String} tempo do vídeo
 */
export class Videos extends Core {
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
