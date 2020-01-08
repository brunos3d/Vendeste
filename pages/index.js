import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const Index = ({ message }) => (
    <>
        <Page title="Vendesto - Inicio">
            <Navbar />
            <h1>{message || "Home"}</h1>
        </Page>
    </>
);

export default Index;
