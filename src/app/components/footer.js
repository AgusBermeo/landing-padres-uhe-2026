import Image from "next/image";
import Legal from "./legal";

export default function Footer() {
    return (
        <footer className="bg-[#3D494E] text-white">
            <div className="flex max-w-6xl mx-auto px-7 gap-5 md:gap-25 justify-between py-12 flex-col md:flex-row">
                <div className="flex flex-col justify-between md:w-1/2 w-full max-w-125 pt-5 gap-5">
                    <div className="flex flex-col gap-6">
                        <h2>Financiamiento</h2>
                        <p className="text-lg tracking-wide">En la Universidad Hemisferios creemos que apoyar el futuro de su hija/o debe ser un proceso sencillo. Por eso hemos diseñado opciones que facilitan su camino hacia una educación de calidad.</p>
                    </div>
                    <Image
                        src="/uhe-universidad-hemisferios.png"
                        width={299}
                        height={55}
                        alt="Universidad Hemisferios"
                    />
                </div>
                <div className="flex flex-col gap-3 md:w-1/2 w-full max-w-120">
                    <div className="flex justify-between items-center p-7 rounded-xl bg-[#353F44]">
                        <p className="text-lg font-semibold">Planes de financiamiento</p>
                        <Image
                            src="/check-orange.svg"
                            width={26}
                            height={26}
                            alt="Universidad Hemisferios"
                        />
                    </div>
                    <div className="flex justify-between items-center p-7 rounded-xl bg-[#353F44]">
                        <p className="text-lg font-semibold">Crédito Directo</p>
                        <Image
                            src="/check-orange.svg"
                            width={26}
                            height={26}
                            alt="Universidad Hemisferios"
                        />
                    </div> 
                    <div className="flex justify-between items-center p-7 rounded-xl bg-[#353F44]">
                        <p className="text-lg font-semibold">Diferidos con y sin intereses</p>
                        <Image
                            src="/check-orange.svg"
                            width={26}
                            height={26}
                            alt="Universidad Hemisferios"
                        />
                    </div> 
                    <div className="flex justify-between items-center p-7 rounded-xl bg-[#353F44]">
                        <p className="text-lg font-semibold">Cuentas en principales bancos</p>
                        <Image
                            src="/check-orange.svg"
                            width={26}
                            height={26}
                            alt="Universidad Hemisferios"
                        />
                    </div> 
                </div>
            </div>
            <Legal />
        </footer>
    )
}