import { SignInBtn, SignUpBtn } from "@/app/UI/SignBtns"
let HeaderAuth = () => {
    return (
        <div className="h-full w-44 flex box-border items-center justify-evenly">
            <SignInBtn />
            <SignUpBtn />
        </div>
    )
}
export default HeaderAuth