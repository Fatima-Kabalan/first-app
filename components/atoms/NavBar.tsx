export default function NavBar() {
    return (
        <nav className="bg-black w-full" >
            <ul className="text-white flex gap-2 items-center justify-center">
                <li><a href="/about">about</a></li>
                <li><a href="/profile">profile</a></li>
            </ul>
        </nav>
    )
}