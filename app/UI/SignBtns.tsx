import Link from "next/link"

export let SignInBtn = () => {
    return <Link href='/login' className='h-7 box-border font-roboto font-light text-sm bg-primary flex items-center justify-center rounded-sm w-20 text-text'>Sign in</Link>
}
export let SignUpBtn = () => {
    return <Link href='/register' className='h-7 box-border font-roboto font-light text-sm bg-secondary flex items-center justify-center rounded-sm w-20 text-text'>Sign up</Link>
}
