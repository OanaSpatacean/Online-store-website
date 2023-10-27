import React, { createContext, useContext, useState } from 'react';

export const EmailContext = createContext();

export const useEmail = () => {
  return useContext(EmailContext);
};

export const useEmailValue = () => useContext(EmailContext).email;

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <EmailContext.Provider value={{ email, setEmail: setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
};
