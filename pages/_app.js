import App from "next/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <style jsx global>{`
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Open Sans", sans-serif;
                    }

                    body {
                        background-color: #ededed;
                    }
                `}</style>

                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
