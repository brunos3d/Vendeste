import styled from "styled-components";

export const Container = styled.a`
    * {
        font-family: "Work Sans", -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
    }

    & {
        cursor: pointer;
        background-color: #fff;

        border-radius: 5px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        color: #333;
        border: 1px solid #444;
        font-size: 16px;
        text-decoration: none;

        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    & > img {
        width: 100%;
        height: 200px;

        border-radius: 3px 3px 0 0;

        object-fit: cover;
        /* object-fit: scale-down; */
    }

    & > footer {
        padding: 15px 28px;

        display: flex;
        flex-direction: column;

        align-items: center;

        background: #fff;

        text-align: left;
        border-radius: 0 0 5px 5px;
    }

    & .ui-price {
        font-size: 1.25rem;
        color: #333;
        font-weight: 700;
    }

    & .ui-title {
        margin-top: 0.2rem;
        font-size: 1rem;
        color: #222;
    }

    & .ui-description {
        margin-top: 0.25rem;
        font-size: 0.8rem;
        color: #999;
    }
`;
