import Image from "next/image"
let PageGradient = () => {
    return (
        <div>
            <Image src="/images/left-grad.png" width={500} height={1000} alt="" className=" bg-transparent opacity-70 absolute left-0 top-0 select-none pointer-events-none h-full"/>
            <Image src="/images/right-grad.png" width={500} height={1000}  alt="" className="bg-transparent opacity-70 absolute right-0 top-0 select-none pointer-events-none h-full "/>
            </div>
    )
}
export default PageGradient