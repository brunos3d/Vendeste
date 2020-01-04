import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

import { HtmlContainer } from "../frontend/styles/document";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();

        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        return (
            <HtmlContainer lang="pt-BR">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </HtmlContainer>
        );
    }
}
