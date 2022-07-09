import React from "react";

export interface IUserFormData {
  fname: string;
  lname: string;
  username: string;
  gender: string;
  role: string;
  address: string;
  email: string;
  password: string;
  repass: string;
}

interface IStateType {
  arrUsers: IUserFormData[];
  loginUserIndex: number;
}

const sampleAppContext: IStateType = {
  arrUsers: [],
  loginUserIndex: -1,
};

const GlobalContext = React.createContext<IStateType>(sampleAppContext);
export default GlobalContext;
