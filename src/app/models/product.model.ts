/*
Los modelos son estructuras de datos que vamos a usar en uno o mas componentes.
Un modelo puede extender de otro y omitir atributos de esa extencion.
Un modelo puede extender de otro modelo y cambiar la opcionalidad de sus atributos.
*/
export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }

