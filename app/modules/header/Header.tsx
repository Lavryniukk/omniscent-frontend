import HeaderAuth from "./components/HeaderAuthSection/HeaderAuth"
import SidebarToggleButton from "./components/SidebarToggler"
let Header = () => {
    return <div className="border-b h-14 flex w-full justify-center backdrop-blur-sm fixed top-0.5 z-10 border-accent box-border ">
       
        <div className="w-full h-14 fixed top-0  flex
                        items-center justify-between max-w-10xl z-0 px-5
                        box-border">
            <SidebarToggleButton />
            {/* <HeaderAuth /> */}
         </div>
        </div>
}

export default Header