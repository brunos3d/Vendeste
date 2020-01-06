import { Container } from "./styles";

export default function LoginForm({ showTriangle, header, onSubmit, children }) {
    return (
        <Container>
            {showTriangle && <div className="login-triangle"></div>}

            <h2 className="login-header">{header}</h2>

            <form className="login-container" onSubmit={onSubmit}>
                {children}
            </form>
        </Container>
    );
}
