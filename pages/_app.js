import App from "next/app";
import "../assets/app.css";

import { Container } from "../frontend/styles/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />

                <style jsx global>{``}</style>
            </Container>
        );
    }
}

export default MyApp;
