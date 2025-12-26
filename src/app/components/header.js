import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky gap-4 top-0 z-10 bg-white py-3 md:py-5 md:pl-15 pl-5 pr-5 shadow-md flex items-center justify-between">
            <a className="hover:opacity-70 transition-opacity " target="_blank" href="https://www.uhemisferios.edu.ec/">
                <Image
                    src="/uhe-universidad-hemisferios.png"
                    width={150}
                    height={28}
                    alt="Universidad Hemisferios"
                    className="md:hidden block"
                />
                <Image
                    src="/uhe-universidad-hemisferios.png"
                    width={299}
                    height={55}
                    alt="Universidad Hemisferios"
                    className="hidden md:block"
                />
                </a>
            <div className="flex gap-3 md:gap-8 items-center">
                <a href="https://web.whatsapp.com/send?phone=593987283746&text=" className="flex py-3 px-4.5 rounded-xl border items-center border-[#B9CDD5] bg-[#E7EDEF] hover:bg-[#3D494E] transition-colors hover:text-white duration-300 ease-in-out gap-4">
                    <span className="hidden lg:block">Escríbanos</span>
                    <Image
                    src="/whatsapp.svg" alt="WhatsApp"
                    width={23}
                    height={23} />
                </a>
                <div className="flex gap-3 md:gap-5.5">
                    <a href="https://www.facebook.com/uhemisferios" target="_blank">
                        <Image
                        src="/ic-fb.png" alt="Facebook"
                        width={26}
                        height={26} />
                    </a>
                    <a href="https://vm.tiktok.com/ZMe66FfjT" target="_blank">
                        <Image
                        src="/ic-tk.png" alt="TikTok"
                        width={26}
                        height={26} />
                    </a>
                    <a href="https://instagram.com/uhe.oficial" target="_blank">
                        <Image
                        src="/ic-ig.png" alt="Instagram"
                        width={26}
                        height={26} />
                    </a>
                    <a href="https://www.youtube.com/user/uhemisferios" target="_blank">
                        <Image
                        src="/ic-yt.png" alt="YouTube"
                        width={26}
                        height={26} />
                    </a>
                </div>
            </div>
        </header>
    )
}
