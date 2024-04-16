import Image from "next/image"
import logo from "../../../public/assets/images/logo.svg"
import location from "../../../public/assets/icons/location.svg"
import phone from "../../../public/assets/icons/phone.svg"
import Link from "next/link"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

export default function Header() {
    return (
        <header className="w-11/12 mx-auto py-12">
            <nav className="flex justify-between items-center">
                <ul className="items-center gap-10 flex">
                    <li>
                        <Image src={logo} alt="logo cook" />
                    </li>
                    <li className="px-2 py-1 hover:bg-red-100 transition-all duration-300 hidden lg:flex" ><Link href="" title="">Home</Link></li>
                    <li className="px-2 py-1 hover:bg-red-100 transition-all duration-300 hidden lg:flex" ><Link href="" title="">Menu</Link></li>
                    <li className="px-2 py-1 hover:bg-red-100 transition-all duration-300 hidden lg:flex" ><Link href="" title="">Contact</Link></li>
                </ul>
                <div className="flex-col gap-2 hidden lg:flex">
                    <div className="flex items-center gap-2">
                        <Image src={location} alt="icone localisation" />
                        <p>Champs de Mars, 5 Av. Anatole France, 75007 Paris</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={phone} alt="icone telephone" />
                        <p>06 06 06 06 06</p>
                    </div>
                    <p>Ouverture : 11h30 - 14h30 & 18h00 - 22h30 • Fermé le dimanche</p>
                </div>
                <BurgerMenu/>
            </nav>
        </header>
    )
}
