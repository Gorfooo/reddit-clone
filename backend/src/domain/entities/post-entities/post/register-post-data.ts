export interface RegisterPostData {
  idPost?: number;
  idUsuario: number;
  titulo: string;
  conteudo: string;
  tags?: number[];
}
