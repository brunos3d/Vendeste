import React from "react";
import Link from "next/link";
import Router, { withRouter } from "next/router";

import { Container } from "./styles";

const Navbar = ({ isAuth, router }) => {
    const route = router.asPath;

    return (
        <Container>
            <div className="navbar">
                <div className="ruler">
                    <div className="links">
                        <Link href={isAuth ? "/home" : "/noauthhome"} as="/">
                            <a className={`link ${!route || route === "/" ? "active-link" : ""}`}>Home</a>
                        </Link>
                        {isAuth ? (
                            <Link href="/user">
                                <a className={`link ${route == "/user" ? "active-link" : ""}`}>User</a>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login">
                                    <a className={`link ${route == "/login" ? "active-link" : ""}`}>Login</a>
                                </Link>
                                <Link href="/register">
                                    <a className={`link ${route == "/register" ? "active-link" : ""}`}>Register</a>
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
