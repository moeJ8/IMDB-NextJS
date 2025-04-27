import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href="/" className="flex items-center gap-1">
        <span className="text-2xl font-bold bg-amber-500 px-2 py-1 rounded-lg">IMDB</span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  )
}
