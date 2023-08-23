import TypingAnimation from "@/app/UI/TypingAnimation"
// import HomeDescription from "@/app/UI/HomeDescription/HomeDescription"
import { NextPage } from "next"
import HomeButtons from "@/app/components/HomeButtons/HomeButtons"

let HomePage: NextPage = () => {
    return <div className=" h-screen bg-no-repeat mx-auto box-border max-w-10xl  w-full pt-40 sm:pt-52 md:pt-64">
            <h1 className="text-4xl text-text sm:text-5xl md:text-6xl lg:text-7xl font-roboto font-bold text-center ">Become <span className="text-primary">Omniscient</span></h1>
            <TypingAnimation />
            {/* <HomeDescription /> */}
            <HomeButtons />
        </div>
}
export default HomePage