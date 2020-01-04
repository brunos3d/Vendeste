import Head from "next/head";

import Page from "../frontend/components/Page";
import Test from "../frontend/components/Test";

const Index = ({ products }) => {
    return (
        <>
            <Page title="Vendesto - Bem-vindo">
                <Head>
                    <title>Vendeste</title>
                </Head>
                <Test />
                {products.map((product, id) => (
                    <div key={id}>
                        Produto {id}: {product}
                    </div>
                ))}
            </Page>
        </>
    );
};

Index.getInitialProps = async ({ query }) => {
    // console.log(context);
    return { ...query };
};

export default Index;
