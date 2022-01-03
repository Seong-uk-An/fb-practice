import {
  authService,
  createUser,
  googleAuthProvider,
  signIn,
  popupSignIn,
  githubAuthProvider,
} from "fb";
import { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUser(authService, email, password);
        //create a new account
      } else {
        data = await signIn(authService, email, password);
        // log in
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      // Sign in using a popup.
      provider = new googleAuthProvider();
    } else if (name === "git-hub") {
      provider = new githubAuthProvider();
    }
    const result = await popupSignIn(authService, provider);
    console.log(result);

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // This gives you a Google Access Token.
    const credential = provider.credentialFromResult(authService, result);
    const token = credential.accessToken;
    console.log(token);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={newAccount ? "Create new account" : "Log in"}
        />
        {error}
      </form>
      <button onClick={toggleAccount}>
        {newAccount ? "로그인" : "계정이 없으신가요?"}
      </button>
      <button onClick={onSocialClick} name="google">
        continue with google
      </button>
      <button onClick={onSocialClick} name="git-hub">
        continue with github
      </button>
    </div>
  );
}

export default Auth;
