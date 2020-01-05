import Head from "next/head";

export default function PageInfo({ title, description }) {
    return (
        <Head>
            <title>{title || "Vendeste - App de vendas"}</title>
            {description !== false && (
                <meta name="description" content={description || "Vendeste é um app de vendas online"} />
            )}
        </Head>
    );
}
