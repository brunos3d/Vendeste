import styled from "styled-components";

export const Container = styled.div`
    & .product-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;
    }

    & .product-list {
        margin: 3rem 0;

        display: grid;
        list-style: none;

        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 15px;
    }
`;
