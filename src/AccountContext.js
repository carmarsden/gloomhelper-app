import React from 'react';

const AccountContext = React.createContext({
    loggedIn: false,
    handleOpenModal: () => {},
    promptLogin: () => {},
});

export default AccountContext;