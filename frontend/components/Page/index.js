import PageInfo from "../PageInfo";

import { Container } from "./styles";

export default function Page({ title, description, children }) {
    return (
        <Container>
            <PageInfo title={title} description={description} />
            {children}
        </Container>
    );
}
