import styled from "styled-components";

export const Container = styled.a`
    & {
        background-color: #fff;

        border-radius: 5px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        color: #333;
        font-size: 16px;
        text-decoration: none;
    }

    & > img {
        width: 100%;
        height: 200px;

        border-radius: 5px 5px 0 0;

        object-fit: scale-down;
    }

    & > footer {
        flex: 1;
        padding: 15px 28px;

        display: flex;
        flex-direction: column;

        background: #fff;
        border: 1px solid #eee;

        text-align: left;
        border-radius: 0 0 5px 5px;
    }
`;
