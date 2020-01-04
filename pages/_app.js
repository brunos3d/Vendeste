import App from "next/app";

import { AppContainer } from "../frontend/styles/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <AppContainer>
                <Component {...pageProps} />
            </AppContainer>
        );
    }
}

export default MyApp;
