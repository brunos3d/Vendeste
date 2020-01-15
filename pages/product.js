import queryString from "query-string";
import "../assets/product.css";

import { api } from "../shared/services/api";
import formatter from "../shared/internationalization/formatter";

import Navbar from "../frontend/components/Navbar";
import PageInfo from "../frontend/components/PageInfo";

const Product = ({ product }) => {
    const { name, description, price, preview } = product;

    return (
        <>
            <PageInfo title={`Vendesto - ${name}`} description={description} />
            <Navbar isAuth={false} />
            <h1>Product</h1>
            <p>Nome: {name}</p>
            <p>Preço: {formatter.format(price).replace("$", "$ ")}</p>
            <p>Descrição: {description}</p>
            <p>Pré-visualização:</p>
            <img className="product-preview" src={`/${preview}.jpg`} alt={name} />
        </>
    );
};

Product.getInitialProps = async ({ query }) => {
    const response = await api.get(`/product/${query.id}`);

    const product = response.data;

    return { product };
};

export default Product;
