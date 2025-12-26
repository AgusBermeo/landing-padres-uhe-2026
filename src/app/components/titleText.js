import Image from "next/image";

export default function TitleText({ props }) {
    return (
        <div className="flex items-start py-12">
            <div className="p-1 w-59 hidden lg:block">
                <Image
                src="/uhe-emblema.png"
                alt="Logo"
                width={209}
                height={84} />
            </div>
            <div className="w-full">
                <div className="flex items-start gap-5 ">
                    <Image
                        src="/uhe-emblema.png"
                        alt="Logo"
                        width={105}
                        height={42}
                        className="lg:hidden block" />
                    <h2>{props.title}</h2>
                </div>
                <p className="text-xl tracking-wide">{props.text}</p>
            </div>
        </div>
    )

}