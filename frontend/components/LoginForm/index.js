import axios from "axios";
import { useState } from "react";

import { Container } from "./styles";

import LoginInput from "../LoginInput";

export default function LoginForm({ showTriangle }) {
    const development_mode = (process.env.NODE_ENV || "return").includes("development");
    const protocol = development_mode ? "http" : "https";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        axios.post(`${protocol}://${window.location.host}/auth/authenticate`, {
            email,
            password,
            withCredentials: true
        });
        // .then(res => {
        //     if (res.status == 200) {
        //         window.location.href = "/";
        //     }
        // });
    }

    return (
        <Container>
            {showTriangle && <div className="login-triangle"></div>}

            <h2 className="login-header">{warningMessage ? warningMessage : "Entrar no Vendeste"}</h2>

            <form className="login-container" onSubmit={handleSubmit}>
                <LoginInput type="email" placeholder="Email" value={email} onChange={setEmail} required />
                <LoginInput type="password" placeholder="Senha" value={password} onChange={setPassword} required />
                <LoginInput type="submit" value="Entrar" />
            </form>
        </Container>
    );
}
