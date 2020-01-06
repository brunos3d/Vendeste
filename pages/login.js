import { Container } from "../frontend/styles/login";

import PageInfo from "../frontend/components/PageInfo";
import LoginSignInForm from "../frontend/components/LoginSignInForm";

const Login = () => {
    return (
        <Container>
            <PageInfo title="Vendesto - Entrar" description="Venha fazer parte do Vendesto" />
            <LoginSignInForm />
        </Container>
    );
};

// Login.getInitialProps = async ctx => {
//     const { query } = ctx;
//     return { ...query };
// };

export default Login;
