import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data);
      })
  }, []);

  return (
    <div className="container py-4">

      <h1 className="text-center mb-4">Benvenuto nel FakeStore!</h1>
      <p className="text-center mb-5">
        Qui puoi trovare tutti i prodotti presi dalla FakeStore API.
      </p>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>

            <Link to={`/products/${product.id}`}>

              <div className="card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-4"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate">{product.description}</p>
                  <p className="fw-bold">${product.price}</p>
                </div>
              </div>

            </Link>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
