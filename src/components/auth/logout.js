import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="auth-button" onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
    )
  );
};

export default LogoutButton;