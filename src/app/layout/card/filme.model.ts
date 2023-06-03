export interface Filme {
    // ? opcional
    id: number,
    titulo: string;
    assistido?: boolean;
    sinopse?: string;
    genero: string;
    classificacao: number,
    pais: string;
    ano: number;
    img: string;
}