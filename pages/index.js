import Page from "../frontend/components/Page";

const Index = ({ products, username }) => {
    return (
        <>
            <Page title="Vendesto - Inicio">
                <h1>{username}</h1>
                {products &&
                    products.map((product, id) => (
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
