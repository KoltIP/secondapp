import React, { useEffect, useState } from "react"
import {IProduct} from '../hooks/product'
import axios from 'axios'

export function useProducts(){
const[products,setProducts] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState('')

function  addProduct(product:IProduct)
{
    setProducts(prev => [...prev, product])
}

async function fetchProducts(){
    try{
        setError('')
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
    }
    catch(e)
    {      
        setLoading(false)
        setError(e.message)
    }
}


useEffect(()=>{
fetchProducts()
}, [])

return {products, error, loading, addProduct}
}