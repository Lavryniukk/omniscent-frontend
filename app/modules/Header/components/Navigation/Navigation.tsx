import Logo from "../CleverizeLogo/CleverizeLogo";
import HeaderLink from "../HeaderLink/HeaderLink";

// export default function Navigation({ theme }: { theme: string }) {
export default function Navigation() {
  return (
    <nav className="hidden md:flex h-full items-center">
      {/* <Logo picTheme={theme} /> */}
      <Logo />
      <div className="space-x-7 mx-10 hidden md:block">
        <HeaderLink url="/workspace" name="Workspace" />
        <HeaderLink url="/memberships" name="Memberships" />
        <HeaderLink url="/blog" name="Blog" />
      </div>
    </nav>
  );
}
