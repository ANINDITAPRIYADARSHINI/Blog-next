"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";




export default function NavigationTestPage(){
    //client side navigation 
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")
    console.log(q);

    console.log(pathname);
    function handleClick() {
        console.log("clicked");
        router.forward()
        
    }
    return(
        <>
            <Link href= "/" prefetch={false}>Click Here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </>
    )
}