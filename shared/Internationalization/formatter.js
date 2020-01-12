import Intl from "intl";
import "intl/locale-data/jsonp/pt-BR";

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default formatter;
