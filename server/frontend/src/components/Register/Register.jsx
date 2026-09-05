import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
const [userName, setUserName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const register = async (e) => {
e.preventDefault();

```
const register_url = window.location.origin + "/djangoapp/register";

const res = await fetch(register_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userName,
    firstName,
    lastName,
    email,
    password,
  }),
});

const json = await res.json();

if (res.ok) {
  alert("Registration successful.");
  window.location.href = "/login";
} else {
  alert(json.error || "Registration failed.");
}
```

};

return ( <div> <Header />

```
  <div className="registerContainer">
    <form className="register_panel" onSubmit={register}>
      <h2>Sign-up</h2>

      <div>
        <span className="input_field">Username </span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input_field"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>

      <div>
        <span className="input_field">First Name </span>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input_field"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <span className="input_field">Last Name </span>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input_field"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div>
        <span className="input_field">Email </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input_field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <span className="input_field">Password </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input_field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          className="action_button"
          type="submit"
          value="Register"
        />
      </div>
    </form>
  </div>
</div>
```

);
};

export default Register;
