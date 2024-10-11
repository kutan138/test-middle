import { NextResponse } from "next/server";

export function middleware() {
  console.log("Run");
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
