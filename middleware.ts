import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip paths that are not part of the public Qafotel site
  matcher: [
    "/((?!api|_next|_vercel|sign-in|sign-up|dashboard|favicon.ico|.*\\..*).*)",
  ],
};
