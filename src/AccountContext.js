import React from 'react';

const AccountContext = React.createContext({
    loggedIn: false,
    handleOpenModal: () => {},
});

export default AccountContext;