import App from "next/app";

import { Container } from "../frontend/styles/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <style jsx global>{`
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Open Sans", sans-serif;
                    }

                    body {
                        background-color: #ededed;
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

                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
