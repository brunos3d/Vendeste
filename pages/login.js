import { Container } from "../frontend/styles/login";

import PageInfo from "../frontend/components/PageInfo";
import LoginForm from "../frontend/components/LoginForm";

const Login = () => {
    return (
        <Container>
            <PageInfo title="Vendesto - Login" description="Venha fazer parte do Vendesto" />
            <LoginForm />
        </Container>
    );
};

// Login.getInitialProps = async ctx => {
//     const { query } = ctx;
//     return { ...query };
// };

export default Login;
