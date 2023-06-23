export interface Filme {
  /**
   * atributo ? null
   * atributo ! not null 
   */
  id: number;
  titulo: string;
  assistido?: boolean;
  sinopse: string;
  genero: string [];
  classificacao: number;
  pais: string [];
  ano: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
}