import Storage from "local-session-storage";

import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";
import AdCard from "../frontend/components/AdCard";

import { Container } from "../frontend/styles/home";

const Index = ({ products }) => {
    return (
        <Container>
            <Page title="Vendesto - Inicio">
                <Navbar isAuth={true} />
                <h1>Home</h1>
                {products && (
                    <div className="product-container">
                        <h2>Compre, compre, compre!</h2>
                        <ul className="product-list">
                            {products.map((item, id) => (
                                <li key={id}>
                                    <AdCard
                                        price={item.price}
                                        title={item.name}
                                        description={item.description}
                                        image={`/${item.preview}.jpg`}
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
