import Router from "next/router";

import { Container } from "./styles";
import { api } from "../../../shared/services/api";

import AdCard from "../AdCard";

export default function HomePage({ isAuth, products }) {
    async function cardClickHandler(event, productId) {
        event.preventDefault();

        if (isAuth) {
            return api
                .post("/user/wishlist/additem", {
                    productId
                })
                .then(res => {
                    // console.log(res);
                    if (res.status == 200 && res.data.success) {
                        Router.push("/user");
                        // window.location.href = "/user";
                    }
                });
        } else {
            Router.push("/register");
        }
    }

    return (
        <Container>
            {products && (
                <div className="product-container">
                    <h2>Compre, compre, compre!</h2>
                    <ul className="product-list">
                        {products.map((product, id) => (
                            <li key={id}>
                                <AdCard
                                    onClick={e => cardClickHandler(e, product._id)}
                                    price={product.price}
                                    title={product.name}
                                    description={product.description}
                                    image={`/${product.preview}.jpg`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
}
