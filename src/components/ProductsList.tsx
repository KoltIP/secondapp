import React, { useState, useContext } from "react"
import { Product } from "./Product.tsx"
import { useProducts } from "../hooks/products.ts"
import { Loader } from "./Loader.tsx"
import { ErrorMessage } from "./ErrorMessage.tsx"
import {Modal} from "./Modal.tsx"
import { CreateProduct } from "./CreateProduct.tsx"
import {IProduct} from "../models/models/tsx"
import { ModalContext } from "../context/ModalContext.tsx"

export function ProductList()
{
  const{loading,error,products, addProduct} = useProducts()
  const{modal,open,close} = useContext(ModalContext)

const createHandler = (product:IProduct) =>{
  close()
  addProduct(product)
}

    return(
          <div className="container mx-auto max-w-2xl pt-5">
            <Loader loading={loading}/>
            <ErrorMessage error={error}/>
            { products.map (
              ( product,index)=>
                < Product product={product} key={index} />
                )
            }          
          {modal && <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandler}/>
          </Modal>}

          <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
          onClick={open}>+</button>
        </div>
      ) 
}
