import Image from "next/image";
import logo from "../../../public/assets/images/logoWhite.svg"
import Link from "next/link";
import location from "../../../public/assets/icons/locationWhite.svg"
import phone from "../../../public/assets/icons/phoneWhite.svg"

type Props = {
    isOpen: boolean;
}

const Menu: React.FC<Props> = ({ isOpen }) => {
    return (
        <div className={` ${isOpen ? "" : "lg:hidden"} animate-slide-in flex flex-col pl-8 justify-center absolute top-0 left-0 bg-red-500 h-screen w-full z-10`}>
            <div className="absolute top-12 left-8">
                <Image src={logo} alt="logo cook" />
            </div>
            <nav className="mb-24">
                <ul className="flex flex-col gap-8">
                    <li><Link className="text-red-50 text-5xl" href="" title="lien vers la section Home">Home</Link></li>
                    <li><Link className="text-red-50 text-5xl" href="" title="lien vers la section Menu">Menu</Link></li>
                    <li><Link className="text-red-50 text-5xl" href="" title="lien vers la section Contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <Image src={location} alt="icone localisation" />
                    <p className="text-red-50">Champs de Mars, 5 Av. Anatole France, 75007</p>
                </div>
                <div className="flex gap-2">
                    <Image src={phone} alt="icone téléphone" />
                    <p className="text-red-50">06 06 06 06 06</p>
                </div>
                <p className="text-red-50">Ouverture : 11h30 - 14h30 & 18h00 - 22h30 • Fermé le dimanche</p>
            </div>
        </div>
    );
}

export default Menu;
