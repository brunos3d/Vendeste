import styled from "styled-components";

export const Container = styled.div`
    & {
        width: 100%;
        height: 100%;
    }

    & .flex-column-center {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        /* align-items: center; */
        justify-content: center;
    }

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
