import ProductCard from './ProductCard'

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-5 gap-2">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
