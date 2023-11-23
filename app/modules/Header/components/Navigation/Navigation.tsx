import HeaderLink from "../HeaderLink/HeaderLink";

export default function Navigation() {
  return (
    <div className="hidden md:flex h-full items-center">
      <div className="space-x-7 mx-10 hidden md:block">
        <HeaderLink url="/workspace" name="Workspace" />
        <HeaderLink url="/memberships" name="Memberships" />
        <HeaderLink url="/blog" name="Blog" />
      </div>
    </div>
  );
}
