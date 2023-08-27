import React, { useState } from "react";

import validator from 'validator';
  

import "../ModalStyles/LoginModal.css";

function LoginModal({onClose}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCloseModal = () => {
    onClose();
  }

  const handleLogin = async () => {
    try { 
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        localStorage.setItem("token", data.token);
        onClose(); 
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  };

  const handleSignup = async () => {

    if (!validator.isEmail(email)) {
      setMessage("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        onClose();
      } else {
        setMessage(data.error.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    }
  };


  return (
    <div>
      <div className="Backdrop" onClick={onClose}></div>
      <div className="LoginModal">
        <p className="LoginTitle">Connexion ou inscription</p>
        <div className="LoginForm">
          <input
            type="email"
            name="Adresse mail"
            className="LoginInput"
            id="mail-input"
            placeholder="Adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="Mot de passe"
            className="LoginInput"
            id="password-input"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {message && <p className="Message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
