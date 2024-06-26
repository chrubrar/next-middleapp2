import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    // Log the current request pathname
    console.log("Current path:", request.nextUrl.pathname);
    //return NextResponse.next();
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: [
        // match all routes except static files and APIs
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};