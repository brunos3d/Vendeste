import App from "next/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Component {...pageProps} />
                <style jsx global>{`
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: "Open Sans", sans-serif;
                    }
                `}</style>
            </div>
        );
    }
}

export default MyApp;
