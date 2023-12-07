import Logo from "../CleverizeLogo/CleverizeLogo";
import HeaderLink from "../HeaderLink/HeaderLink";

export default function Navigation({ theme }: { theme: string }) {
  return (
    <nav className="hidden md:flex h-full items-center">
      <Logo picTheme={theme} />

      <div className="space-x-7 mx-10 hidden md:block">
        <HeaderLink url="/workspace" name="Workspace" />
        <HeaderLink url="/memberships" name="Memberships" />
        <HeaderLink url="/blog" name="Blog" />
      </div>
    </nav>
  );
}
