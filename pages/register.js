import { Container } from "../frontend/styles/register";

import PageInfo from "../frontend/components/PageInfo";
import LoginSignUpForm from "../frontend/components/LoginSignUpForm";

const Register = () => {
    return (
        <Container>
            <PageInfo title="Vendesto - Registrar" description="Venha fazer parte do Vendesto" />
            <LoginSignUpForm />
        </Container>
    );
};

// Register.getInitialProps = async ctx => {
//     const { query } = ctx;
//     return { ...query };
// };

export default Register;
