import { api } from "../shared/services/api";

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

Index.getInitialProps = async ({ query }) => {
    let { products } = query;

    if (!products) {
        const response = await api.get("/products");

        products = response.data;
    }

    return { products };
};

export default Index;
