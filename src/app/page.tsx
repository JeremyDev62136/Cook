import Image from "next/image"
import femmeAvecBurger from "../../public/assets/images/femmeAvecBurger.png"
import Card from "@/components/Card/Card"
import classic from "../../public/assets/images/classic.png"
import triple from "../../public/assets/images/triple.png"
import mixte from "../../public/assets/images/mixte.png"
import chevreMiel from "../../public/assets/images/chevreMiel.png"
import bacon from "../../public/assets/images/bacon.png"
import raclette from "../../public/assets/images/raclette.png"
import vegetarien from "../../public/assets/images/vegetarien.png"
import boursin from "../../public/assets/images/boursin.png"
import femmeAvecTel from "../../public/assets/images/femmeAvecTel.png"
import instagram from "../../public/assets/icons/instagram.png"
import facebook from "../../public/assets/icons/facebook.png"

export default function Home() {

  const burgers = [
    {
      img: classic,
      title: "Le classic",
      description: "steaks 80gr, fromage, cornichon, oignon, tomate, sauce mystère",
      price: "7.50€"
    },
    {
      img: triple,
      title: "Le triple",
      description: "triple steacks grillés, triple dose de cheddar, cornichon, mayonnaise, ketchup",
      price: "8.50€"
    },
    {
      img: mixte,
      title: "Le mixte",
      description: "steacks grillés, poulet, cheddar, salade, moutarde, ketchup",
      price: "10.50€"
    },
    {
      img: chevreMiel,
      title: "Le chèvre miel",
      description: "steaks 80gr, chèvre, salade, tomate, sauce poivre, miel",
      price: "8.00€"
    },
    {
      img: bacon,
      title: "Le bacon",
      description: "steaks 80gr, bacon grillés, fromage, salade, tomate, sauce burger",
      price: "8.50€"
    },
    {
      img: raclette,
      title: "Le raclette",
      description: "double steaks 80gr, bacon grillés, fromage raclette, tranche de pomme de terre, salade, sauce BBQ",
      price: "12.50€"
    },
    {
      img: vegetarien,
      title: "Le végétarien",
      description: "steak au soja, poivron rouge, poivron jaune, oignon, salade, sauce végétarienne",
      price: "8.50€"
    },
    {
      img: boursin,
      title: "Le boursin",
      description: "steack 80gr, boursin, oignon frit, salade, tomate, sauce légère au fromage blanc",
      price: "9.00€"
    }
  ]

  return (
    <main className=" w-full mx-auto">
      <section className="md:h-80 sm:w-11/12 sm:mx-auto bg-burger bg-cover bg-center flex flex-col justify-center gap-2 p-6 mb-6">
        <h1 className=" text-red-50 font-bold text-xl md:text-5xl xl:text-6xl">La nourriture de qualité</h1>
        <p className=" text-red-50 font-bold text-xl md:text-5xl xl:text-6xl">Rendue facile.</p>
        <button className="bg-red-500 w-max px-4 py-2 mt-8 text-red-50 rounded-md">Voir le menu</button>
      </section>
      <section className="mb-6 sm:flex gap-4 sm:w-11/12 sm:mx-auto">
        <div className="bg-red-500 p-8 mb-6 sm:mb-0 w-11/12 mx-auto flex flex-col justify-center">
          <p className="text-red-50 text-lg sm:text-base md:text-xl lg:text-3xl font-bold xl:text-5xl">Chaque bouchée de nos burgers est une célébration de la qualité et du savoir-faire de nos producteurs locaux.</p>
          <h2 className="font-bold text-red-950 text-xl sm:text-base md:text-xl lg:text-4xl xl:text-5xl mt-10">Libérez votre envie, pas votre portefeuille</h2>
        </div>
        <div className="relative w-11/12 mx-auto">
          <Image
            src={femmeAvecBurger}
            alt="femme avec un burger à la main"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-center sm:justify-around gap-6 w-11/12 mx-auto">
        {burgers.map((burger): any => (
          <Card
            key={burger.title}
            img={burger.img}
            title={burger.title}
            description={burger.description}
            price={burger.price}
          />
        ))}
      </section>
      <section className="my-6 md:flex md:w-11/12 md:mx-auto md:gap-4">
        <div className="relative mb-6 md:mb-0 w-11/12 mx-auto">
          <Image
            src={femmeAvecTel}
            alt="femme avec un téléphone à la main"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="bg-red-500 p-6 w-11/12 mx-auto md:flex md:flex-col md:justify-around">
          <h2 className="font-bold text-red-950 text-3xl mb-10 md:mb-2 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl">Contact</h2>
          <div className="mb-4 md:mb-0">
            <p className="text-red-950 font-bold text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-3xl mb-2">Venir déguster nos burgers sur place</p>
            <p className="text-red-50 font-bold text-lg md:text-sm lg:text-lg  xl:text-xl 2xl:text-3xl">Champs de Mars, 5 Av. Anatole France, 75007 Paris</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-red-950 font-bold text-lg md:text-base lg:text-lg  xl:text-xl 2xl:text-3xl mb-2">Appeler-nous pour passer commande</p>
            <p className="text-red-50 font-bold text-lg md:text-sm lg:text-lg  xl:text-xl 2xl:text-3xl">06 06 06 06 06</p>
          </div>
          <div className="mb-0">
            <p className="text-red-950 font-bold text-lg md:mb-2 md:text-base lg:text-lg xl:text-xl 2xl:text-3xl mb-2">Nous rejoindre sur les réseaux</p>
            <div className="flex items-center gap-4">
              <Image src={instagram} alt="logo instagram" />
              <Image src={facebook} alt="logo facebook" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
