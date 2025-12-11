import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                const data = res.data;
                if (!data || data.id === undefined) {
                    navigate("/Products");
                } else {
                    setProduct(data);
                }
            })
    }, [id]);

    if (!product) {
        return null;
    }

    return (
        <div style={{
            border: "1px solid black",
            padding: "20px",
            width: "300px",
            margin: "20px auto",
            borderRadius: "10px",
            textAlign: "center"
        }}>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>{product.price} €</h3>
        </div>
    );
}
