import React, { createContext } from "react";

type IStoreProviderProps = {
    children: React.ReactNode;
    initialState?: any;
    props?: any
};

export const ContextProvider: React.FC<IStoreProviderProps> = ({ children, initialState={}, props={} }) => {
  const GlobalState = createContext(initialState);
  const { Provider } = GlobalState;

  return <Provider value={props}>{children}</Provider>;
};
