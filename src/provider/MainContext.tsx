import { createContext, useRef } from "react";
import { IMainContext, IMainContextProps } from "../interface/index";

export const MainContext = createContext({} as IMainContext);

export const MainContextProvider = ({ children }: IMainContextProps) => {
  const NavbarDrawerRef = useRef<HTMLInputElement>(null);
  const NavbarElementRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = !NavbarDrawerRef.current.checked;
  };

  return (
    <>
      <MainContext.Provider
        value={{
          NavbarDrawerRef,
          NavbarElementRef,
          toggleDrawer,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
