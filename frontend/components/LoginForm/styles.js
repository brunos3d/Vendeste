import styled from "styled-components";

export const Container = styled.div`
    & {
        width: 400px;
        font-size: 16px;
    }

    .login-header {
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
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .login-container {
        background: #fff;
        padding: 12px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
`;
