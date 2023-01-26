import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button class="auth-button" onClick={() => loginWithRedirect()}>Login</button>
    )
  );
};

export default LoginButton;