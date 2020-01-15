import App from "next/app";

import { Container } from "../frontend/styles/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />

                <style jsx global>{`
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Open Sans", -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
                    }

                    body {
                        background-color: #f5f5f5;
                    }

                    html,
                    body,
                    body > div:first-child,
                    div#__next,
                    div#__next > div {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>
            </Container>
        );
    }
}

export default MyApp;
