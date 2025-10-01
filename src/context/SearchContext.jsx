import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()
export const useSearch = () => useContext(SearchContext)

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [products, setProducts] = useState([])

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const updateProducts = (newProducts) => {
        setProducts(newProducts)
    }

    return (
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery,
            filteredProducts,
            updateProducts,
            products
        }}>
            {children}
        </SearchContext.Provider>
    )
}