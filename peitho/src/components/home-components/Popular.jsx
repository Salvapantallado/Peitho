export default function Popular({allProducts}) {
    const popularItems = allProducts.sort(() => Math.random() - 0.5).slice(0, 6)
    return(
        <div className="popular-container">
            <div className="section-title">
            <h2>Más Populares</h2>
            </div>
            <div className="popular-grids">
                {popularItems?.map((popItem, index) => (
                    <div key={index}>
                        <img src={popItem.image[0]} alt="popular clothing" />
                    </div>
                ))}
            </div>
        </div>
    )
}