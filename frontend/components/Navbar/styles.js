import styled from "styled-components";

export const Container = styled.div`
    --navbar-height: 50px;

    & {
        margin-bottom: var(--navbar-height);
    }

    & > .navbar {
        position: fixed;

        top: 0;
        width: 100%;
        height: var(--navbar-height);

        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        z-index: 1;
    }

    & > .navbar > .ruler {
        height: 100%;
        max-width: 1200px;

        margin: auto;
        padding: 0 20px 0 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    & .links .link {
        display: inline-block;
        padding: 5px 8px;
        color: inherit;
        text-decoration: none;
    }

    & .links .active-link {
        color: #0070f3;
    }
`;
