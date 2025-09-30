export default function ProductCard({ product }) {
   const {
    thumbnail,
    title,
    price,
    discountPercentage
   } = product
   

    return (
        <div className="product-card--conainer">
            <div className="product-card--image-holder">
                <img src={thumbnail} alt={title} />
                <p>-{Math.round(discountPercentage)}%</p>
            </div>
            <div className="product-card--description-holder">
                <h1>{title}</h1>
                <div>
                    <p>{price}</p>
                    <button>Add to Cart</button>
                </div>  
            </div>
        </div>
    )
}
