import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isCmsRoute = pathname.startsWith("/admin/cms");
  const isLoginRoute = pathname.startsWith("/admin/login");
  const session = request.cookies.get("spado_cms_session")?.value;

  if (isCmsRoute && session !== "authenticated") {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", "Please login to continue.");
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginRoute && session === "authenticated") {
    return NextResponse.redirect(new URL("/admin/cms", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/cms/:path*", "/admin/login"],
};