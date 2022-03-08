import { Link } from "react-router-dom";

// Add functional searchbar here later, placeholder for now

export default function Topbar() {
    return(
        <article>

            <input type="text" />

            <nav>
                <p><Link to="/account">Account</Link></p>
                <p><Link to="/cart">Cart</Link></p>
            </nav>
            
        </article>
    );
}