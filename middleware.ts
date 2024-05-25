import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const protectedRoutes = [
        '/',
    ]

    // const userToken = request.cookies.get("next-auth.session-token")?.value;
    const userToken = request.cookies.get("authjs.session-token")?.value;
    if ((request.nextUrl.pathname.startsWith('/login') && userToken) || (request.nextUrl.pathname.startsWith('/register') && userToken)) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!userToken && protectedRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.rewrite(new URL('/access-denied', request.url))
    }
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: ['/product-child', '/product', '/login', '/register', "/"],
// }

