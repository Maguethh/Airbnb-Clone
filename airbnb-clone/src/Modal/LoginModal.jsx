import React from "react";

import "../ModalStyles/LoginModal.css";

function LoginModal() {

  const handleLogin = () => {
    console.log("Connexion");
  };

  const handleSignup = () => {
    console.log("Inscription");
  };

  return (
    <div>
      <div className="Backdrop"></div>

      <div className="LoginModal">
        <p className="LoginTitle">Connexion ou inscription</p>
        <div className="LoginForm">
          <input
            type="email"
            name="Adresse mail"
            className="LoginInput"
            id="mail-input"
            placeholder="Adresse mail"
          />
          <input
            type="password"
            name="Mot de passe"
            className="LoginInput"
            id="password-input"
            placeholder="Mot de passe"
          />
          <input
            type="submit"
            className="SubmitButton"
            value="Connexion"
            onClick={handleLogin}
          />
          <input
            type="submit"
            className="SubmitButton"
            value="Inscription"
            onClick={handleSignup}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
