import React, { useState } from "react";

import { Container } from "./styles";

export default function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Container>
            <div className="login-triangle"></div>

            <h2 className="login-header">Log in</h2>

            <form className="login-container">
                <p>
                    <input type="email" placeholder="Email" />
                </p>
                <p>
                    <input type="password" placeholder="Password" />
                </p>
                <p>
                    <input type="submit" value="Log in" />
                </p>
            </form>
        </Container>
    );
}
