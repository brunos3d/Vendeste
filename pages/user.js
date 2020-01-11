// import Storage from "local-session-storage";

import { APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const User = ({ isAthenticated, user }) => {
    const { name, username, email, wishlist } = user;

    return (
        <>
            <Page title="Vendesto - Inicio">
                <Navbar isAthenticated={isAthenticated} />
                <h1>User</h1>
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
                <p>Nome de usuário: {username}</p>
                {wishlist && <h2>Lista de desejos</h2>}
                {wishlist &&
                    wishlist.map((item, id) => (
                        <div className="product" key={id}>
                            <h4>{item.name}</h4>
                            <p>R$ {item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
            </Page>
        </>
    );
};

User.getInitialProps = async ({ req, query }) => {
    let { user } = query;

    // if (process.browser) {
    //     user = Storage.Session.get("user_data");
    // }
    if (!user) {
        const response = await APIGet(req, "/user");
        user = response.data;
        // if (process.browser) {
        //     Storage.Session.set("user_data", user);
        // }
    }

    return { user, ...query };
};

export default User;
