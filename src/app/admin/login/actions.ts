"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

function isValidAdmin(email: string, password: string) {
  return (
    email === process.env.CMS_ADMIN_EMAIL &&
    password === process.env.CMS_ADMIN_PASSWORD
  );
}

export async function loginAdmin(formData: FormData): Promise<void> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!isValidAdmin(email, password)) {
    redirect("/admin/login?error=Invalid%20username%20or%20password.");
  }

  const cookieStore = await cookies();

  cookieStore.set("spado_cms_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect("/admin/cms");
}

export async function logoutAdmin(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set("spado_cms_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  redirect("/admin/login");
}