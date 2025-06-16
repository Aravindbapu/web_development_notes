import { Overpass_Mono } from "next/font/google";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
            <div className="logo font-bold">Instagram</div>
            <ul className='flex gap-6'>
                <Link href='/'><li>Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar