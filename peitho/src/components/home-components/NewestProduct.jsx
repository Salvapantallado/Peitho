

export default function NewestProduct({allProducts}) {
    const lastProduct = allProducts.find(
      (x) => x.id === Math.max(...allProducts?.map((x) => x.id), 0)
    );
  

  return (
    <div>
      <div className="section-title">
        <h2>Último lanzamiento</h2>
      </div>
      {lastProduct ? 
      <div className="product-info">
        <div>
          <h2>{lastProduct.name}</h2>
        </div>
        <div className="product-carousel">
          {lastProduct?.image.map((product, index) => (
              <img key={index} src={product} alt="" />
          ))}
            </div>
      </div>
       : <h1>Cargando...</h1>}
    </div>
  );
}
