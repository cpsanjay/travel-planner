import { signOut, singIn } from "@/auth";

export const signin = async () => {
  await singIn("github", { redirectTo: "/" });
};

export const signout = async () => {
  await signOut({ redirectTo: "/" });
};
