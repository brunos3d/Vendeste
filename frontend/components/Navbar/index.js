import React from "react";
import Link from "next/link";
import Router, { withRouter } from "next/router";

import { Container } from "./styles";

const Navbar = ({ isAuth, router }) => {
    const route = router.asPath;

    // Um filtro simples para evitar o carregamento desnecessário da pagina atual
    function linkHandler(event, href) {
        event.preventDefault();
        if ((href == "/" && route != "/") || (href != "/" && !route.startsWith(href))) {
            Router.push(href);
        }
    }

    return (
        <Container>
            <div className="navbar">
                <div className="ruler">
                    <div className="links">
                        <Link href="/">
                            <a
                                onClick={e => linkHandler(e, "/")}
                                className={`link ${!route || route === "/" ? "active-link" : ""}`}
                            >
                                Home
                            </a>
                        </Link>
                        {isAuth ? (
                            <Link href="/user">
                                <a
                                    onClick={e => linkHandler(e, "/user")}
                                    className={`link ${route.startsWith("/user") ? "active-link" : ""}`}
                                >
                                    User
                                </a>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login">
                                    <a
                                        onClick={e => linkHandler(e, "/login")}
                                        className={`link ${route.startsWith("/login") ? "active-link" : ""}`}
                                    >
                                        Login
                                    </a>
                                </Link>
                                <Link href="/register">
                                    <a
                                        onClick={e => linkHandler(e, "/register")}
                                        className={`link ${route.startsWith("/register") ? "active-link" : ""}`}
                                    >
                                        Register
                                    </a>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default withRouter(Navbar);
