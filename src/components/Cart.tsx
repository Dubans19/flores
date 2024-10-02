// import React from 'react'

function Cart({ producto }: { producto: any }) {
  console.log("producto es", producto)
  return (
    <div className="absolute right-4 mt-2 w-72 bg-white shadow-md rounded-md p-4">
      {producto.map((product: any) => (
        <div>
          <h1>{product.id}</h1>
          <h1>{product.nombre}</h1>
          <img src={product.img}></img>


        </div>
      ))}


    </div>
  )
}

export default Cart