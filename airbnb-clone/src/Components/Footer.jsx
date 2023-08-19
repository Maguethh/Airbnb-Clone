import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../ComponentsStyles/Footer.css"

function Footer() {
    return(
        <div className="Footer">
            <ul className="FooterListL">
                <li className="FooterLi">© AirBnb Inc 2023</li>
                <li className="FooterLi">Confidentialité</li>
                <li className="FooterLi">Conditions générales</li>
                <li className="FooterLi">Plan du site</li>
                <li className="FooterLi">Fonctionnement du site</li>
                <li className="FooterLi">Infos sur l'entreprise</li>
                <li className="FooterLi">Destinations</li>
            </ul>

            <ul className="FooterListR">
                <li className="FooterLiR">"Français"</li>
                <li className="FooterLiR">EUR   </li>
                <li className="FooterLiR">Assistance et ressources</li>
            </ul>
        </div>
    )
}

export default Footer;