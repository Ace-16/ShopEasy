import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    dispatch({
      type: "SET_ADDRESS",
      address: address,
    });
  };

  return (
    <div className="create__account">
      <form className="account__form">
        <div className="account__name">
          <label> First Name</label>
          <input type="text" />
          <label> Last Name</label>
          <input type="text" />
        </div>
        <div className="account__email">
          <label> Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="account__address">
          <label> Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="account__password">
          <label> Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="account__button" onClick={register}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
