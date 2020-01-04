import Head from "next/head";

import LoginForm from "../frontend/components/LoginForm";

const Login = ({ status, error }) => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginForm message={error} />
        </>
    );
};

Login.getInitialProps = async ctx => {
    const { query } = ctx;

    return { ...query };
};

export default Login;
