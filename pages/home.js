import Storage from "local-session-storage";

import { api, APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";
import AdCard from "../frontend/components/AdCard";

import { Container } from "../frontend/styles/home";

const Index = ({ products }) => {
    async function cardClickHandler(event, productId) {
        event.preventDefault();

        return api
            .post("/user/wishlist/additem", {
                productId
            })
            .then(res => {
                console.log(res);
                if (res.status == 200 && res.data.success) {
                    window.location.href = "/user";
                }
            });
    }

    return (
        <Container>
            <Page title="Vendesto - Inicio">
                <Navbar isAuth={true} />
                <h1>Home (autenticado)</h1>
                {products && (
                    <div className="product-container">
                        <h2>Compre, compre, compre!</h2>
                        <ul className="product-list">
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
