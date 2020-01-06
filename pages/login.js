import { Container } from "../frontend/styles/login";

import Navbar from "../frontend/components/Navbar";
import PageInfo from "../frontend/components/PageInfo";
import LoginSignInForm from "../frontend/components/LoginSignInForm";

const Login = () => {
    return (
        <Container>
            <PageInfo title="Vendesto - Entrar" description="Venha fazer parte do Vendesto" />
            <Navbar />
            <div className="flex-column-center">
                <LoginSignInForm />
            </div>
        </Container>
    );
};

// Login.getInitialProps = async ctx => {
//     const { query } = ctx;
//     return { ...query };
// };

export default Login;
