import React from "react";

import { Container } from "./styles";

export default function AdCard({ price, image, title, description }) {
    return (
        <Container href="https://www.google.com">
            <img src={image} />
            <footer>
                <span>{title}</span>
                <span>{price}</span>
                <span>{description}</span>
            </footer>
        </Container>
    );
}
