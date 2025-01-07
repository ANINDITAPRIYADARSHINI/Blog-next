import Link from "next/link";


export default function NavLink({item}: { item: { title: string; path: string } }) {
    return(
        <div>
            <Link href={item.path}> {item.title} </Link>
        </div>
    );
}



