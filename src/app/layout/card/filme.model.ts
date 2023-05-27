export interface Filme {
    // ? opcional
    titulo: string;
    assistido?: boolean;
    sinopse?: string;
    genero: string;
    pais: string;
    ano: number;
    img: string;
}