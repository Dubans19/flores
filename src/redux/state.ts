import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definir la interfaz para el producto
interface Producto {


  producto: string;
}

// Definir la interfaz para el estado
interface ProductosState {
  productos: Producto[]; // Array de productos
}

// Inicializar el estado
const initialState: ProductosState = {
  productos: [],
  // groupProducts:[]
};
interface Producto {
  id: number; // o string, dependiendo de tu implementación
  // otras propiedades...
}
export const productoSlice = createSlice({
  name: "productos",
  initialState,
  reducers: {
    setProducto: (state, action: PayloadAction<Producto>) => {
      console.log("action payload", action.payload.producto);
      state.productos.push(action.payload); // Añadir el producto al estado
    },
    quitProducto: (state, action: any) => {
        console.log("action payload id", action.payload);

        state.productos=state.productos.filter((producto:any)=>producto.id!=action.payload )
      
      },

      removeOneProduct: (state, action: any) => {
        console.log("action payload id", action.payload);

        const indexAEliminar = state.productos.findIndex(producto => (producto as Producto).id === action.payload);

        // Si se encuentra el índice, eliminar el elemento usando splice
        if (indexAEliminar !== -1) {
          state.productos.splice(indexAEliminar, 1);
        }
        
      
      },

      // groupProducts: (state, action: any) => {
      //   console.log("action payload group products", action.payload);

      //   state.groupProducts=state.action.payload.reduce((acc: any[], product: any) => {
      //     const existingProduct = acc.find(p => p.id === product.id);
          
      //     if (existingProduct) {
      //       existingProduct.cantidad += 1; // Si ya existe el producto, incrementamos la cantidad
      //     } else {
      //       acc.push({ ...product, cantidad: 1 }); // Si no existe, lo agregamos con cantidad 1
      //     }
          
      //     return acc;
      //   }, []);
      
      // },
      
      // increaseQuantity: (state, action) => {
      //   const product = state.productos.find(p => p.id === action.payload);
      //   if (product) {
      //     product.cantidad += 1; // Incrementa la cantidad
      //   }
      // },
  },
});

// Exportar la acción
export const { setProducto ,quitProducto,removeOneProduct} = productoSlice.actions;

// Exportar el reducer
export default productoSlice.reducer;
