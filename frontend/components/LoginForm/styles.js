import styled from "styled-components";

export const Container = styled.div`
    & {
        width: 400px;
        font-size: 16px;
    }

    .login-header,
    & p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .login-triangle {
        width: 0;
        margin-right: auto;
        margin-left: auto;
        border: 12px solid transparent;
        border-bottom-color: #28d;
    }

    .login-header {
        background: #28d;
        padding: 20px;
        font-size: 1.4em;
        font-weight: normal;
        text-align: center;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .login-container {
        background: #fff;
        padding: 12px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    & p {
        padding: 12px;
    }

    & h4 {
        text-align: center;
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
