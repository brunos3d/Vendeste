import Storage from "local-session-storage";

import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const Index = ({ products }) => {
    return (
        <>
            <Page title="Vendesto - Inicio">
                <Navbar />
                <h1>Home</h1>
                {products && <h2>Compre, compre, compre!</h2>}
                {products &&
                    products.map((item, id) => (
                        <div className="product" key={id}>
                            <h4>{item.name}</h4>
                            <p>R$ {item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
            </Page>
        </>
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
