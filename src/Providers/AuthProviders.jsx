import React, { createContext } from 'react';

export const AuthContext = createContext();

const auth = getAuth();
const AuthProviders = ({ children }) => {

    const authInfo = {

    }
    return (
        <AuthContext.provider value={authInfo}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProviders;