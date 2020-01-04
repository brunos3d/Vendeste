import Head from "next/head";

import Test from "../frontend/components/Test";

const Index = ({ products }) => {
    return (
        <div className="App">
            <Head>
                <title>Vendeste</title>
            </Head>
            <Test />
            {products.map((product, id) => (
                <div key={id}>
                    Produto {id}: {product}
                </div>
            ))}
        </div>
    );
};

Index.getInitialProps = async ({ query }) => {
    // console.log(context);
    return { products: query.products };
};

export default Index;
