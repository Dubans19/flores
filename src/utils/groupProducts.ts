
// src/utils/groupProducts.ts
export const groupProducts = (productos: any[]) => {
    return productos.reduce((acc: any[], product: any) => {
      const existingProduct = acc.find(p => p.id === product.id);
      
      if (existingProduct) {
        existingProduct.cantidad += 1; // Si ya existe el producto, incrementamos la cantidad
      } else {
        acc.push({ ...product, cantidad: 1 }); // Si no existe, lo agregamos con cantidad 1
      }
      
      return acc;
    }, []);
  };
  