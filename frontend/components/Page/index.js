import Head from "next/head";

// import { Container } from './styles';

export default function Page({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title || "Vendeste - App de vendas"}</title>
                {description !== false && (
                    <meta name="description" content={description || "Vendeste é um app de vendas online"} />
                )}
            </Head>
            {children}
        </>
    );
}
