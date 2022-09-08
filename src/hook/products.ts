import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";


export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [broken, setBroken] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const addProduct=(carProducts:IProduct)=>{
        setProducts(prev=>[...prev, carProducts])
    }

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>(
                // 'https://www.ebay.de/sch/i.html?_from=R40&_nkw=89940-50100&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4'
                'https://fakestoreapi.com/products?limit=5'
        )
            console.log(response)
            setProducts(response.data)
            setBroken(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return {products,
        broken,
        error,
        loading,
        addProduct
    }
}
