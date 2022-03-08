import Topbar from "../components/Topbar";
import Products from "../components/Products";
//import { Link } from "react-router-dom";
// <p><Link to="/2">Your desired link.</Link></p>

let testProducts = [
   {name: "Product 1", icon: "icon"},
   {name: "Product 2", icon: "icon"},
   {name: "Product 3", icon: "icon"}
];

export default function Homepage() {
    return(
        <article>
            <Topbar />

            <h1>Welcome to E-Commerce Site!</h1>

            <h1>Products for you!</h1>

            <Products products={testProducts}/>

        </article>
    );
}


