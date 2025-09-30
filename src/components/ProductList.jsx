import ProductCard from './ProductCard'

export default function ProductList({ products }) {
    return (
        <div className="product-list--container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
