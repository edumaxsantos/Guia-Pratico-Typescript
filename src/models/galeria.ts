import { Core } from "./core";
import { Fotos } from "./fotos";

/**
 * Model de galeria de fotos
 * @type fotos {Array} lista da model de fotos
 */
export class Galeria extends Core {
  constructor(
    readonly titulo: String,
    readonly texto: String,
    readonly imagem: String,
    readonly dataPublicacao: Date,
    readonly tags: String,
    readonly link: String,
    readonly ativo: Boolean,
    readonly fotos: Array<Fotos>
  ) {
    super(titulo, texto, imagem, dataPublicacao, tags, link, ativo);
  }
}
