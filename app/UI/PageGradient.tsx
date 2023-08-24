import Image from "next/image"
let PageGradient = () => {
    return (
        <>
            <Image src={'/images/left-grad.png'} width={500} height={1000} className="opacity-1 absolute h-10lg w-1/2 top-0 left-0"  alt=""/>
            <Image src={'/images/right-grad.png'} width={500} height={1000} className="opacity-1 absolute h-10lg w-1/2 top-0 right-0" alt=""/>
        </>
    )
}
export default PageGradient