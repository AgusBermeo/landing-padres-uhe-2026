import { Alumni_Sans } from 'next/font/google';
import { Euphoria_Script } from 'next/font/google';

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  display: 'swap', 
});

const euphoriaScript = Euphoria_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', 
});

export default function Legal() {
    return (
      <div className="border-t border-white bg-[#3D494E]">
        <div className="flex justify-between items-center py-3 px-7 max-w-6xl mx-auto md:flex-row flex-col flex-col-reverse gap-4">
            <p className="text-sm">Todos los derechos reservados ® Universidad Hemisferios. {new Date().getFullYear()}</p>
            <p className={`${alumniSans.className} antialiased uppercase text-xl font-bold tracking-wide`}>Esto es <span className={`${euphoriaScript.className} antialiased capitalize text-3xl tracking-normal`}>Excelencia</span> profundamente humana.</p>
        </div>
      </div>
    )
}