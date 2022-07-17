import { Snackbar, AlertTitle } from "@mui/material";
import Alert, { AlertColor } from "@mui/material/Alert";
import React, { useContext, useState, createContext } from "react";

interface SnackbarContextInterface {
  error: (newMessage: string) => void;
  success: (newMessage: string) => void;
}

export const SnackbarContext = createContext({} as SnackbarContextInterface);

type SnackbarProviderProps = {
  children: React.ReactNode;
};

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = (
    event: React.SyntheticEvent<any> | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const error = (newMessage: string) => {
    setTitle("error");
    setMessage(newMessage);
    setSeverity("error");
    setOpen(true);
  };

  const success = (newMessage: string) => {
    setTitle("success");
    setMessage(newMessage);
    setSeverity("success");
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ error, success }}>
      {children}
      <Snackbar
        key={message}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export default SnackbarProvider;
