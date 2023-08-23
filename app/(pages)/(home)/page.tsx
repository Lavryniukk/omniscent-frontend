import TypingAnimation from "@/app/UI/TypingAnimation"
import { NextPage } from "next"
import HomeButtons from "@/app/components/HomeButtons/HomeButtons"
import PageGradient from "@/app/UI/PageGradient"

let HomePage: NextPage = () => {
    return <div className=" h-screen bg-transparent mx-auto box-border max-w-10xl
                            w-full pt-40 sm:pt-52 md:pt-64">
            <PageGradient/>                    
            <h1 className="text-4xl tracking-wider text-text sm:text-5xl
                            md:text-6xl lg:text-7xl font-roboto font-bold text-center "
            >Become <span className="text-primary">Bogdan</span>
            </h1>
            <TypingAnimation />
            <HomeButtons />
        </div>
}
export default HomePage