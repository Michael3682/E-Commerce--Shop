import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5"
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

export default function ProductDetails() {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) {
        return (
            <>
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">Loading...</div>
                </div>
            </>
        )
    }

    if (!product) {
        return (
            <>
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">Product not found</div>
                </div>
            </>
        )
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        const stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoStar key={`full-${i}`} className="text-yellow-400" />)
        }

        if (hasHalfStar) {
            stars.push(<IoStarHalf key="half" className="text-yellow-500" />)
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<IoStarOutline key={`empty-${i}`} className="text-gray-300" />)
        }

        return stars
    }

    const discountedPrice = product.price * (1 - (product.discountPercentage || 0) / 100)

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2">
                    <div>
                        <img className="w-[500px] rounded bg-[#ffffff] border border-[#24242440]" src={product.thumbnail} alt={product.title} />
                        <div className="flex gap-2 mt-4">
                            {product.images?.slice(0, 3).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} view ${index + 1}`}
                                    className="w-[100px] rounded bg-[#ffffff] border border-[#24242440] cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center">
                                {renderStars(product.rating)}
                            </div>
                            <span className="text-gray-600">({product.rating})</span>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-[#242424]">
                                    ${discountedPrice.toFixed(2)}
                                </span>
                                {product.discountPercentage > 0 && (
                                    <>
                                        <span className="text-lg text-gray-500 line-through">
                                            ${product.price}
                                        </span>
                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                                            -{product.discountPercentage}%
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="space-y-4 mb-6">
                            <p className="text-gray-700">{product.description}</p>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold">Brand</h3>
                                    <p>{product.brand}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Category</h3>
                                    <p className="capitalize">{product.category}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Stock Status</h3>
                                    <p className={product.stock > 10 ? "text-green-600" : "text-red-600"}>
                                        {product.availabilityStatus}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border border-[#24242440] rounded">
                                <button className="px-4 py-2 border-r border-[#24242440] cursor-pointer" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    -
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button className="px-4 py-2 border-l border-[#24242440] cursor-pointer" onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </button>
                            </div>
                            <button className="bg-[#242424] py-2 px-4 border rounded cursor-pointer text-[#ffffff] hover:bg-[#363636]" onClick={() => addToCart(product, quantity)}>
                                Add to Cart
                            </button>
                        </div>
                        <div className="mt-15">
                            <hr className="border-t border-[#24242440]" />
                            <div className="pt-5 pb-8">
                                <h3 className="font-semibold mb-2">Shipping Information</h3>
                                <p>{product.shippingInformation}</p>
                            </div>
                            <hr className="border-t border-[#24242440]" />
                            <div className="pt-5 pb-8">
                                <h3 className="font-semibold mb-2">Warranty</h3>
                                <p>{product.warrantyInformation}</p>
                            </div>
                            <hr className="border-t border-[#24242440]" />
                            <div className="pt-5 pb-8">
                                <h3 className="font-semibold mb-2">Return Policy</h3>
                                <p>{product.returnPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                    <div>
                        {product.reviews?.map((review, index) => (
                            <>
                                <hr className="border-t border-[#24242440]" />
                                <div key={index} className="pb-8 pt-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex items-center">
                                            {renderStars(review.rating)}
                                        </div>
                                        <span className="font-semibold">{review.reviewerName}</span>
                                    </div>
                                    <p className="text-gray-700">{review.comment}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date(review.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}