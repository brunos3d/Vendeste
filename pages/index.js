import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const Index = ({ username, wishlist }) => (
    <>
        <Page title="Vendesto - Inicio">
            <Navbar />
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

Index.getInitialProps = async ({ query }) => {
    return { username: query.username, wishlist: query.wishlist };
};

export default Index;
