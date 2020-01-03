import React, { useState, useEffect } from "react";
import api from "./services/api";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/products");
            const products_data = response.data;
            console.log(products_data);
            setProducts(products_data);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Olá, mundo!</h1>
            {products.map((product, id) => (
                <div key={id}>
                    Produto {id}: {product}
                </div>
            ))}
        </div>
    );
}

export default App;
