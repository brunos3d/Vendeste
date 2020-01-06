import { Container } from "../frontend/styles/register";

import Navbar from "../frontend/components/Navbar";
import PageInfo from "../frontend/components/PageInfo";
import LoginSignUpForm from "../frontend/components/LoginSignUpForm";

const Register = () => (
    <Container>
        <PageInfo title="Vendesto - Registrar" description="Venha fazer parte do Vendesto" />
        <Navbar />
        <div className="flex-column-center">
            <LoginSignUpForm />
        </div>
    </Container>
);

// Register.getInitialProps = async ctx => {
//     const { query } = ctx;
//     return { ...query };
// };

export default Register;
