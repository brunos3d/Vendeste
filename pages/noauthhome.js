import Router from "next/router";
import Storage from "local-session-storage";

import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";
import HomePage from "../frontend/components/HomePage";

import { Container } from "../frontend/styles/home";

const Index = ({ products }) => (
    <Container>
        <Page title="Vendesto - Inicio">
            <Navbar isAuth={false} />
            <h1>Home (não autenticado)</h1>
            <HomePage isAuth={false} products={products} />
        </Page>
    </Container>
);

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
