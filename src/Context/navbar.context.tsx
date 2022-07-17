import { createContext, ReactNode } from "react";
interface Context {
  open: boolean;
}

interface NavProps {
  children: ReactNode;
}
export const NavContext = createContext<Context | null>({ open: false });

export const NavProvider = ({ children }: NavProps) => {
  return (
    <NavContext.Provider value={{ open: false }}>
      {children}
    </NavContext.Provider>
  );
};
