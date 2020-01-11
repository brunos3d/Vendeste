import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const Index = test => {
    console.log(test);

    return (
        <>
            <Page title="Vendesto - Inicio">
                <Navbar />
                <h1>Home</h1>
            </Page>
        </>
    );
};

export default Index;
