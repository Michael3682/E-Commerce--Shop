import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import ProductFilter from '../components/ProductFilter'
import Pagination from '../components/Pagination'

export default function MainPage() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sort, setSort] = useState("default")
    const limit = 15

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = "https://dummyjson.com/products"
                let params = []
                const skip = (page - 1) * limit
                params.push(`limit=${limit}`)
                params.push(`skip=${skip}`)

                if (selectedCategory) {
                    url = `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}`
                    params = [`limit=${limit}`, `skip=${skip}`]
                }

                if (sort !== "default") {
                    let sortBy = ""
                    let order = ""
                    if (sort === "price-desc") {
                        sortBy = "price"
                        order = "desc"
                    } else if (sort === "price-asc") {
                        sortBy = "price"
                        order = "asc"
                    } else if (sort === "rate-desc") {
                        sortBy = "rating"
                        order = "desc"
                    } else if (sort === "rate-asc") {
                        sortBy = "rating"
                        order = "asc"
                    } else if (sort === "title-asc") {
                        sortBy = "title"
                        order = "asc"
                    } else if (sort === "title-desc") {
                        sortBy = "title"
                        order = "desc"
                    }
                    if (sortBy && order) {
                        params.push(`sortBy=${sortBy}`)
                        params.push(`order=${order}`)
                    }
                }
                console.log(params);

                const res = await fetch(`${url}?${params.join("&")}`)
                const data = await res.json()
                setProducts(data.products)
                setTotal(data.total || (data.products ? data.products.length : 0))
            } catch (e) {
                console.error(e)
            }
        }
        fetchProducts()
    }, [page, selectedCategory, sort])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res2 = await fetch('https://dummyjson.com/products/category-list')
                const data2 = await res2.json()
                setCategories(data2)
            } catch (e) {
                console.error(e)
            }
        }
        fetchCategories()
    }, [])

    const totalPages = Math.max(1, Math.ceil(total / limit))

    return (
        <>
            <Header />
            <div className='flex flex-row gap-2 w-full mt-20'>
                <ProductFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sort={sort}
                    setSort={setSort}
                />
                <div className='flex flex-col grow'>
                    <ProductList products={products} />
                    <Pagination page={page} setPage={setPage} totalPages={totalPages} />
                </div>
            </div>
        </>
    )
}