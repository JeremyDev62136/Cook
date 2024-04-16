import Image from "next/image"

type Props = {
    img: any,
    title: string,
    description: string,
    price: string
}

export default function Card({ img, title, description, price }: Props) {
    return (
        <div className=" w-11/12 sm:w-5/12 max-w-80 flex flex-col flex- gap-3 border border-slate-300 rounded-lg p-8">
            <Image src={img} alt={`Hamburger ${title}`} width={341} height={306}/>
            <p className="text-red-500 font-bold text-xl">{title}</p>
            <p className="text-slate-500">{description}</p>
            <p className=" text-red-500 text-xl">{price}</p>
        </div>
    )
}