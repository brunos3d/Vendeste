import { useState } from "react";

import { api } from "../../../shared/services/api";

import { Container } from "./styles";

import LoginForm from "../LoginForm";
import LoginInput from "../LoginInput";

export default function LoginSignUpForm({ showTriangle }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (!(password.trim() && confirmPassword.trim())) {
            return alert("Preencha todo o formulário corretamente!");
        } else if (password.trim() && confirmPassword.trim() && password !== confirmPassword) {
            return alert("As informadas senhas não coincidem!");
        }

        api.post("/auth/register", {
            name,
            username,
            email,
            password
        }).then(res => {
            console.log(res);
            if (res.status == 200 && res.data.success) {
                window.location.href = "/";
            }
        });
    }

    return (
        <Container>
            <LoginForm header="Registrar-se no Vendeste" showTriangle={showTriangle} onSubmit={handleSubmit}>
                <LoginInput
                    required
                    type="text"
                    placeholder="Nome completo"
                    pattern="[a-zA-Z]+"
                    title="O nome deve conter apenas letras!"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <LoginInput
                    required
                    type="text"
                    placeholder="Nome de usuário"
                    pattern="[a-zA-Z0-9]+"
                    title="O nome de usuário deve conter apenas caracteres alfanuméricos!"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
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
                    pattern=".{6,}"
                    title="Sua senha deve conter ao menos 6 caracteres!"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <LoginInput
                    required
                    type="password"
                    placeholder="Confirmar senha"
                    pattern={`^${password}$`}
                    title="As senhas informadas não coincidem!"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />
                <LoginInput type="submit" value="Registrar-se" />
            </LoginForm>
        </Container>
    );
}
