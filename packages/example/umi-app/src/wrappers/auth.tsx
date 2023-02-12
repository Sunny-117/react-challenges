import { createContext, useContext, useState } from "react";
import { Navigate, Outlet, useLocation } from "umi";
export default function RequiredAuth(props: any) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
  return <Outlet />;
}

const fakeAuthProvider = {
  isAuthenticated: true,
  signin(callback: any) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: any) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
interface IAuth {
  user: any;
  signIn: (newUser: any, callback: any) => void;
  signOut: (callback: any) => void;
}
const AuthContext = createContext<IAuth>({} as IAuth); // 类型断言

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);
  const signIn = (newUser: any, callback: any) => {
    setUser(newUser);
    callback();
  };
  const signOut = (callback: any) => {
    setUser(null);
    callback();
  };
  let value: IAuth = {
    user,
    signIn,
    signOut,
  };
  return <AuthContext.Provider value={value} children={children} />;
}
export const useAuth = (): IAuth => {
  return useContext(AuthContext);
};
