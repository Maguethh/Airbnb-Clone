import React from "react";
import { useState } from "react";

import LoginModal from "../Modal/LoginModal"

import "../ModalStyles/UserModal.css"


function UserModal({onClose}) {
    
    const [loginModalVisibility, setLoginModalVisibility] = useState(false);

    const handleToggleLoginModal = () => {
      setLoginModalVisibility(!loginModalVisibility);
    }

    return (
        <div className="UserModal">
            <div className="UserModalContainerTop">
                <button className="UserModalButton" onClick={handleToggleLoginModal}>Connexion</button>
                <button className="UserModalButton" onClick={handleToggleLoginModal}>Inscription</button>
            </div>

            <div className="UserModalContainerBottom">
                <button className="UserModalButton">Mettre mon logement sur Airbnb</button>
                <button className="UserModalButton">Centre d'aide</button>
            </div>

            {loginModalVisibility && (
                <LoginModal onClose={handleToggleLoginModal} />
            )}
        </div>
    )
}

export default UserModal;