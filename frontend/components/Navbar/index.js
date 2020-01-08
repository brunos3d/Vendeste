import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import { Container } from "./styles";

const Navbar = ({ router }) => {
    const route = router.pathname;

    return (
        <Container>
            <div className="navbar">
                <div className="ruler">
                    <div className="links">
                        <Link href="/">
                            <a className={`link ${route === "/" ? "active-link" : ""}`}>Home</a>
                        </Link>
                        <Link href="/user">
                            <a className={`link ${route.startsWith("/user") ? "active-link" : ""}`}>User</a>
                        </Link>
                        <Link href="/login">
                            <a className={`link ${route.startsWith("/login") ? "active-link" : ""}`}>Login</a>
                        </Link>
                        <Link href="/register">
                            <a className={`link ${route.startsWith("/register") ? "active-link" : ""}`}>Register</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default withRouter(Navbar);
