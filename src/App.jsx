import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <>
            <Header />
            <ProductList products={products} />
        </>
    )
}