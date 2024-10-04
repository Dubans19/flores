export const Subtotal = (productos: any[]) => {
    return productos.reduce((sum, product) => 
        sum + product.precio * product.cantidad, 0
      );
    
    }