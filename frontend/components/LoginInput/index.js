import { Container } from "./styles";

export default function LoginForm({ type, required, placeholder, value, onChange }) {
    const component = {
        email: (
            <input
                required={required}
                type="email"
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        ),
        password: (
            <input
                required={required}
                type="password"
                placeholder={placeholder}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        ),
        submit: <input type="submit" value="Entrar" />
    };

    return <Container>{component[type]}</Container>;
}
