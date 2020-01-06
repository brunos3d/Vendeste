import Page from "../frontend/components/Page";

const Index = ({ username, wishlist }) => {
    return (
        <>
            <Page title="Vendesto - Inicio">
                <h1>{username}</h1>
                {wishlist &&
                    wishlist.map((item, id) => (
                        <p key={id}>
                            {item.product}: {item.price}
                        </p>
                    ))}
            </Page>
        </>
    );
};

Index.getInitialProps = async ({ query }) => {
    return { ...query };
};

export default Index;
