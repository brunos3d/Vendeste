import { useState } from "react";

import { Container } from "./styles";

import api from "../../services/api";
import LoginForm from "../LoginForm";
import LoginInput from "../LoginInput";

export default function LoginSignInForm({ showTriangle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        api.post("/auth/authenticate", {
            email,
            password
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                // window.location.href = "/";
            }
        });
    }

    return (
        <Container>
            <LoginForm header="Entrar no Vendeste" showTriangle={showTriangle} onSubmit={handleSubmit}>
                <LoginInput
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <LoginInput
                    required
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <LoginInput type="submit" value="Entrar" />
            </LoginForm>
        </Container>
    );
}
