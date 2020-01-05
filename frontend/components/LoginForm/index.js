import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";

import { Container } from "./styles";

export default function LoginForm(props) {
    const development_mode = (process.env.NODE_ENV || "return").includes("development");
    const protocol = development_mode ? "http" : "https";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warningMessage, setWarningMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(`${protocol}://${window.location.host}/auth/authenticate`, {
                withCredentials: true,
                email,
                password
            })
            .then(res => {
                if (res.status == 200) {
                    window.location.href = "/";
                } else {
                    console.log(res);
                    setWarningMessage("HAHAHA");
                }
            });
        // console.log(test);
    }

    return (
        <Container>
            <div className="login-triangle"></div>

            <h2 className="login-header">{warningMessage ? warningMessage : "Entrar no Vendeste"}</h2>

            <form className="login-container" onSubmit={handleSubmit}>
                <p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </p>
                <p>
                    <input type="submit" value="Entrar" />
                </p>
            </form>
        </Container>
    );
}
