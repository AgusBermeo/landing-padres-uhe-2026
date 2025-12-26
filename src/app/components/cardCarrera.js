import Image from "next/image";

export default function CardCarrera({ props, onClick }) {
    return (
        <div onClick={onClick} className="flex flex-col items-center w-60 pb-3.5 bg-linear-to-b from-50% to-[#9AB2BC] to-50% rounded-2xl relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <img src={`/carreras/thumb-` + props.slug + `.png`} alt="" />
            <Image
                src="/arrow-top-right.svg"
                width={42}
                height={42}
                className="absolute top-9 right-2.5"
                alt="Flecha naranja"
            />
            <div className="h-34 border-x-3 border-[#E9EDEE] bg-white w-full flex flex-col justify-between items-center text-center py-6 hover:shadow-lg">
                <p className="text-xl font-medium h-11 flex items-center leading-6 px-9">{props.nombre}</p>
                <p className="leading-5 px-8"><strong>Duración: </strong> {props.duracion}</p>
            </div>
        </div>
    )
}