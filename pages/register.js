import { Container } from "../frontend/styles/register";

import Navbar from "../frontend/components/Navbar";
import PageInfo from "../frontend/components/PageInfo";
import LoginSignUpForm from "../frontend/components/LoginSignUpForm";

const Register = () => (
    <Container>
        <PageInfo title="Vendesto - Registrar" description="Venha fazer parte do Vendesto" />
        <Navbar />
        <h1>Register</h1>
        <div className="flex-column-center">
            <LoginSignUpForm />
        </div>
    </Container>
);

export default Register;
