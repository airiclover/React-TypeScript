import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../provider/LoginUserPro";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
