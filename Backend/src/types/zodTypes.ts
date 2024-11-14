import { z } from "zod";

export const userZodValidation = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Please Input More than 6 character"),
});

export const userLoginZodValidation = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Please Input More than 6 character"),
});

export const updateUsernameZodValidation = z.object({
  username: z.string().min(1, "Username is required"),
});
export const updateEmailZodValidation = z.object({
  email: z.string().email("Invalid email address"),
});
export const updatePasswordZodValidation = z.object({
  password: z.string().min(6, "Please Input More than 6 character"),
});
