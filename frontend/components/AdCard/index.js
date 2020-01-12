import React from "react";

import { Container } from "./styles";

export default function AdCard(props) {
    // desmembrar o objeto props e passar o resto das propriedas para o obj linkProps
    const { price, image, title, description, ...linkProps } = props;

    return (
        // passar as props para o Container com spread
        <Container {...linkProps}>
            <img src={image} />
            <footer>
                <span className="ui-price">R$ {price.toLocaleString("pt-BR")}</span>
                <span className="ui-title">{title}</span>
                <span className="ui-description">{description}</span>
            </footer>
        </Container>
    );
}
