import "../assets/navbar.css";
import "../assets/pagecontent.css";

import { api } from "../shared/services/api";
import formatter from "../shared/internationalization/formatter";

const Index = ({ products }) => (
    <>
        <div className="navbar">
            <div className="col">
                <input
                    className="search"
                    type="text"
                    placeholder="Pesquise produtos, marcas, lojas e muito mais..."
                ></input>
                <div className="row">
                    <a className="nav-link" href="...">
                        Categorias
                    </a>
                    <a className="nav-link" href="...">
                        Ofertas
                    </a>
                    <a className="nav-link" href="...">
                        Vender
                    </a>
                </div>
            </div>
        </div>

        <div className="page-content">
            <div className="banner"></div>

            <div className="section-list">
                <div className="section">
                    <h3 className="section-title">Eletrônicos</h3>
                    <div className="cards-list">
                        {products.map((product, id) => (
                            <div className="card" key={id}>
                                <img className="card-preview" src={`./${product.preview}.jpg`} alt={product.name} />
                                <div className="preview-gradient"></div>
                                <span className="card-price">{formatter.format(product.price).replace("$", "$ ")}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="section-title">Casa e decoração</h3>
                    <div className="cards-list">
                        {products.map((product, id) => (
                            <div className="card" key={id}>
                                <img className="card-preview" src={`./${product.preview}.jpg`} alt={product.name} />
                                <div className="preview-gradient"></div>
                                <span className="card-price">{formatter.format(product.price).replace("$", "$ ")}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h3 className="section-title">Brinquedos e bebês</h3>
                    <div className="cards-list">
                        {products.map((product, id) => (
                            <div className="card" key={id}>
                                <img className="card-preview" src={`./${product.preview}.jpg`} alt={product.name} />
                                <div className="preview-gradient"></div>
                                <span className="card-price">{formatter.format(product.price).replace("$", "$ ")}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
);

Index.getInitialProps = async ({ query }) => {
    let { products } = query;

    if (!products) {
        const response = await api.get("/products");

        products = response.data;
    }

    return { products };
};

export default Index;
