import Page from "../frontend/components/Page";

const Index = ({ username }) => {
    return (
        <>
            <Page title="Vendesto - Inicio">
                <h1>{username}</h1>
            </Page>
        </>
    );
};

Index.getInitialProps = async ({ query }) => {
    // console.log(context);
    return { ...query };
};

export default Index;
