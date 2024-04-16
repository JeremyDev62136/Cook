import Link from "next/link"
import Image from "next/image"
import location from "../../../public/assets/icons/locationWhite.svg"
import phone from "../../../public/assets/icons/phoneWhite.svg"
import instagram from "../../../public/assets/icons/instagram.png"
import facebook from "../../../public/assets/icons/facebook.png"
import logo from "../../../public/assets//images/logoWhite.svg"

export default function Footer() {
    return (
        <footer className="bg-red-500 w-11/12 mx-auto my-6 p-8">
            <div>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <Image src={logo} alt="logo Cook" />
                        <nav >
                            <ul className="flex gap-4">
                                <li><Link href="" title="Lien vers la section Home" className="text-red-50">Home</Link></li>
                                <li><Link href="" title="Lien vers la section Menu" className="text-red-50">Menu</Link></li>
                                <li><Link href="" title="Lien vers la section Contact" className="text-red-50">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <Image src={location} alt="icone localisation" />
                            <p className="text-red-50">Champs de Mars, 5 Av. Anatole France, 75007 Paris</p>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <Image src={phone} alt="icone telephone" />
                            <p className="text-red-50">06 06 06 06 06</p>
                        </div>
                        <p className="text-red-50">Ouverture: 11h30 - 14h30 & 18h00 - 22h30 • Fermé le dimanche</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-red-50">Nous suivre sur les réseaux sociaux : </p>
                        <div className="flex gap-4">
                            <Image src={instagram} alt="logo instagram" />
                            <Image src={facebook} alt="logo facebook" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <p className="text-red-50">© 2024 Cook. Tous droit réservé</p>
                    <Link href="" title="lien vers les mentions légales" className="text-red-50">Mentions légales</Link>
                </div>
                <p className="text-red-50">Propulsé par Oppocode</p>
            </div>
        </footer>
    )
}
