import Head from "next/head";

import LoginForm from "../frontend/components/LoginForm";

const Login = () => {
    return (
        <div className="App">
            <Head>
                <title>Vendeste</title>
            </Head>
            <LoginForm />
        </div>
    );
};

export default Login;
