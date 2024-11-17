import mongoose from "mongoose";

export interface userValidation {
  username: string;
  email: string;
  password: string;
}

export interface userLoginValidation {
  username: string;
  password: string;
}

export interface usernameValidation {
  username: string;
}
export interface emailValidation {
  email: string;
}

export interface passwordValidation {
  password: string;
}

export interface tokenType {
  username: string;
  userid: mongoose.Types.ObjectId;
  email: string;
}
