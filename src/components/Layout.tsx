import { styled } from "@mui/material";
import { ReactNode } from "react";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: "0",
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "240px",
  }),
}));

interface Props {
  children: ReactNode;
  open: boolean;
}

const Layout = ({ children, open }: Props) => {
  return <Main open={open}>{children}</Main>;
};
export { Layout };
