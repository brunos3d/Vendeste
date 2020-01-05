import styled from "styled-components";

export const Container = styled.div`
    & {
        margin: 24px;
    }

    & input {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        padding: 16px;
        outline: 0;
        font-family: inherit;
        font-size: 0.95em;
    }

    & input[type="email"],
    & input[type="password"] {
        background: #fff;
        border-color: #bbb;
        color: #555;
    }

    & input[type="email"]:focus,
    & input[type="password"]:focus {
        border-color: #888;
    }

    & input[type="submit"] {
        background: #28d;
        border-color: transparent;
        color: #fff;
        cursor: pointer;
    }

    & input[type="submit"]:hover {
        background: #17c;
    }

    & input[type="submit"]:focus {
        border-color: #05a;
    }
`;
