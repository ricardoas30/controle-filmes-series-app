export class Filme {
    id: number;
    titulo!: string;
    assistido?: boolean;
    sinopse?: string;
    genero!: string;
    classificacao!: number;
    pais!: string;
    ano!: number;
    img!: string;
    constructor(id: number) {
      this.id = Number(Math.round(Math.random() * 1000));
    }
}