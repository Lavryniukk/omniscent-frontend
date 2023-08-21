import TypingAnimation from "@/app/UI/TypingAnimation"
import { NextPage } from "next"

let HomePage: NextPage = () => {
    return <div className=" h-screen bg-no-repeat mx-auto box-border max-w-10xl  w-full ">
            <TypingAnimation />
        </div>
}
export default HomePage