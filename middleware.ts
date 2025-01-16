// // middleware.js
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = await getToken({ req });
//   const { pathname } = req.nextUrl;

//   // Доступ дозволений лише авторизованим
//   if (!token && pathname !== "/auth/signin") {
//     return NextResponse.redirect(new URL("/auth/signin", req.url));
//   }

//   // Перевірка ролі для адміністративних роутів
//   if (pathname.startsWith("/admin") && token?.role !== "admin") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/myProfile/:path*", "/protected/:path*"],
// };
