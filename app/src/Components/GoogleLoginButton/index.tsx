import React from 'react';
import GoogleLogin from 'react-google-login';
import gKey from '../../Assets/gKey.json';

const GoogleLoginButton = () => {
    return(
        <>
            <GoogleLogin
                clientId={gKey.web.client_id}
                // onSuccess={}
                // onFailure={}
            />
        </>
    )
}

export default GoogleLoginButton;