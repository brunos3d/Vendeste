import Router from "next/router";
import Storage from "local-session-storage";

import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";
import AdCard from "../frontend/components/AdCard";

import { Container } from "../frontend/styles/home";

const Index = ({ products }) => {
    async function cardClickHandler(event) {
        event.preventDefault();
        Router.push("/register");
    }

    return (
        <Container>
            <Page title="Vendesto - Inicio">
                <Navbar isAuth={false} />
                <h1>Home (não autenticado)</h1>
                {products && (
                    <div className="product-container">
                        <h2>Compre, compre, compre!</h2>
                        <ul className="product-list">
                            {products.map((product, id) => (
                                <li key={id}>
                                    <AdCard
                                        onClick={cardClickHandler}
                                        href="https://www.google.com"
                                        price={product.price}
                                        title={product.name}
                                        description={product.description}
                                        image={`/${product.preview}.jpg`}
                                    />
                                </li>
                            ))}
                            {products.map((product, id) => (
                                <li key={id}>
                                    <AdCard
                                        onClick={e => cardClickHandler(e, product._id)}
                                        href="https://www.google.com"
                                        price={product.price}
                                        title={product.name}
                                        description={product.description}
                                        image={`/${product.preview}.jpg`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Page>
        </Container>
    );
};

Index.getInitialProps = async ({ req, query }) => {
    let products = undefined;

    if (process.browser) {
        const data = Storage.Session.get("products_data");

        if (data) {
            products = data.products;
        }
    }

    if (!products) {
        const response = await APIGet(req, "/product/index");

        products = response.data;

        if (process.browser) {
            Storage.Session.set("products_data", { products });
        }
    }

    return { products, ...query };
};

export default Index;
