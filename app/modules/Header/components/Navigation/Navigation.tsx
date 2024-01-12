import Logo from "../CleverizeLogo/CleverizeLogo";
import HeaderLink from "../HeaderLink/HeaderLink";

export default function Navigation() {
  return (
    <nav className="hidden md:flex h-full items-center space-x-12">
      <Logo />
      <div className="space-x-6 hidden md:block">
        <HeaderLink url="/workspace" name="Workspace" />
        <HeaderLink url="/memberships" name="Memberships" />
        <HeaderLink url="/blog" name="Blog" />
      </div>
    </nav>
  );
}
