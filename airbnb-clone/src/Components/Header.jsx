import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
        <nav>
            <ul>
                <li>
                    <Link to ="/">Accueil</Link>
                    <Link to ="/appart">Appart</Link>
                    <Link to ="/login">Login</Link>
                    <Link to ="*">NotFound</Link>
                </li>
            </ul>
        </nav>
    </header>
        )
}

export default Header;