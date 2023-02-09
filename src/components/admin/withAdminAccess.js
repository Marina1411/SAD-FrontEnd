import React from 'react';
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import AccessDenied from './AccessDenied';
import Topbar from "./Topbar";

const adminEmails = [
  "marinamel123@live.com",
  "felix.labrie@icloud.com",
  "SADSpicegirls4@gmail.com"
];

const withAdminAccess = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { user } = useAuth0();
    const email = user.email;

    if (adminEmails.includes(email)) {
      return <WrappedComponent {...props} />;
    } else {
      return <AccessDenied />;
    }
  };

  return withAuthenticationRequired(Wrapper, {
    authenticating: () => 
    <div className='admin-panel'>
    <Topbar />
    <div className="admin-panel-main">
    <p>Loading...</p>
    </div>
   </div>,
    onRedirecting: () => 
    <div className='admin-panel'>
    <Topbar />
    <div className="admin-panel-main">
    <p>Verifying...</p>
    </div>
   </div>
  });
};

export default withAdminAccess;