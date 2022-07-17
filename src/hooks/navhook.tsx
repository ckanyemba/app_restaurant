import { useContext } from "react";
import { NavContext } from "../Context/navbar.context";

const NavHooks = () => {
  const contextNav = useContext(NavContext);

  const openNavbar = () => {
    contextNav;
  };

  return {};
};
