export type Uuid = string;

export interface Producto {
  uuid: Uuid;
  nombre: string;
  descripcion: string;
  precio: number
}
