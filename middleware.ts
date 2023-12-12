import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/(main)/(home)", "/(main)/memberships"],
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
