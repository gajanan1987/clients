import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./userContex";

export const useUser = () => useContext(UserContext);
export const useAuth = () => useContext(AuthContext);
