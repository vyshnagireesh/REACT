import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../slices/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading Products...</p>;  // works if loading
  if (error) return <p className='text-danger'>Error: {error}</p> // works if error

  return (
    <div className="row">
      {items.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.thumbnail} alt={product.title}
              className='card-img-top'
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <button
                className='btn btn-primary'
              // onClick={()=> dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductList