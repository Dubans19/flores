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
};

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
  },
});

// Exportar la acción
export const { setProducto ,quitProducto} = productoSlice.actions;

// Exportar el reducer
export default productoSlice.reducer;
