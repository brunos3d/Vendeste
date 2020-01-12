import styled from "styled-components";

export const Container = styled.div`
    & .product-container {
        max-width: 980px;
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;
    }

    & .product-list {
        list-style: none;
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin-top: 50px;
    }
`;
