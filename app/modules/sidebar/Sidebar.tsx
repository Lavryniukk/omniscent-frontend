import SideBarSkip from "./components/SidebarSkip"

let SideBar = () => {
    return <div>
        <div className="fixed border box-border w-10 sm:w-12 lg:w-16 md:w-14 h-full"></div>
        <SideBarSkip />
    </div>
}
export default SideBar