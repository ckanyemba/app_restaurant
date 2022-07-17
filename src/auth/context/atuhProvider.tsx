import { createContext, ReactNode, useContext } from "react";
import { UserInfo } from "../types/userInfo";
import { useLocalStorage } from "../../@core/hooks/useLocalstorage";
import { useUserInfo } from "../hooks/useUserInfo";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";
interface AuthContextInterface {
  hasRole: (roles?: string[]) => {};
  isLogginIn: boolean;
  isLoggingOut: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  userInfo?: UserInfo;
}

const AuthContext = createContext({} as AuthContextInterface);

type AuthProviderProps = {
  children?: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authKey, setAuthKey] = useLocalStorage<string>("authkey", "");
  const { data: userInfo } = useUserInfo(authKey);
  const { login, isLogginIn } = useLogin();
  const { logout, isLoggingOut } = useLogout();

  const hasRole = (roles?: string[]) => {
    if (!roles || roles.length === 0) {
      return true;
    }
    if (!userInfo) {
      return false;
    }
    return roles.includes(userInfo.role);
  };

  const handleLogin = async (email: string, password: string) => {
    return login({ email, password })
      .then((key: string) => {
        setAuthKey(key);
        return key;
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleLogout = () => {
    return logout()
      .then((data) => {
        setAuthKey("");
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        isLogginIn,
        hasRole,
        userInfo,
        isLoggingOut,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
