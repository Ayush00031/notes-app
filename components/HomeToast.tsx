"use client";

type ToastVariant = "success" | "destructive" | "default";

type ToastConfig = {
  title: string;
  description: string;
  variant: ToastVariant;
};

const TOAST_CONFIG: Record<string, ToastConfig> = {
  login: {
    title: "Logged in",
    description: "You have been successfully logged in",
    variant: "success",
  },
  signUp: {
    title: "Signed up",
    description: "Check your email for a confirmation link",
    variant: "success",
  },
  newNote: {
    title: "New Note",
    description: "You have successfully created a new note",
    variant: "success",
  },
  logOut: {
    title: "Logged out",
    description: "You have been successfully logged out",
    variant: "success",
  },
};

type ToastType = keyof typeof TOAST_CONFIG;

function isToastType(value: string | null): value is ToastType {
  return value !== null && value in TOAST_CONFIG;
}

function HomeToast() {
  return <div></div>;
}

export default HomeToast;
