// import Storage from "local-session-storage";
import Router from "next/router";

import { api, APIGet } from "../shared/services/api";

import Page from "../frontend/components/Page";
import Navbar from "../frontend/components/Navbar";

const User = ({ user }) => {
    const { name, username, email, wishlist } = user;

    function buttonClickHandler(event, productId) {
        return api
            .delete("/user/wishlist/removeitem", {
                data: { productId }
            })
            .then(res => {
                // console.log(res);
                if (res.status == 200 && res.data.success) {
                    Router.reload();
                    // window.location.href = "/user";
                }
            });
    }

    return (
        <>
            <Page title="Vendesto - Inicio">
                <Navbar isAuth={true} />
                <h1>User</h1>
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
                <p>Nome de usuário: {username}</p>
                {wishlist && <h2>Lista de desejos</h2>}
                {wishlist &&
                    wishlist.map((product, id) => (
                        <div className="product" key={id}>
                            <h4>{product.name}</h4>
                            <p>R$ {product.price}</p>
                            <p>{product.description}</p>
                            <button onClick={e => buttonClickHandler(e, product._id)}>remover</button>
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
