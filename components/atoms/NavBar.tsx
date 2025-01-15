import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-black w-full" >
            <ul className="text-white flex gap-2 items-center justify-center">
                <li><Link href="/about">about</Link></li>
                <li><Link href="/profile">profile</Link></li>
                <li><Link href="/categories">Categories</Link></li>
            </ul>
        </nav>
    )
}