type Props = {
  showSideBar: boolean;
  toggleSideBar: () => void;
};
let SideBar = ({ showSideBar, toggleSideBar }: Props) => {
  return (
    <div
      className={`border-l-2 fixed right-0 top-0 transition-all duration-300  ${
        showSideBar ? "right-0" : "-right-1/4"
      } text-text h-screen w-1/4 `}
    ></div>
  );
};
export default SideBar;
