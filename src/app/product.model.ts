/**
 * Interfaz para declarar las variables que puede tener un objeto, en este caso un objeto de tipo Product
 */
export interface Product {
  name: string;
  price: number;
  image: string;
  /**
   * Esta variable es opcional, puede ser asignada como puede no serlo
   */
  category?: string;
}
