'use client'

import Image from "next/image";
import { useState, useRef } from "react";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Legal from "./components/legal";
import BannerSlider from "./components/banner-slider";
import TitleText from "./components/titleText";
import Card from "./components/card";
import CardCarrera from "./components/cardCarrera";

import { carreras } from "./carreras"

export default function Home() {
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainRef = useRef(null);

  const handleCarreraClick = (carreraId) => {
    if (mainRef.current) {
      setScrollPosition(mainRef.current.scrollTop);
    }
    setSelectedCarrera(carreraId);
  };

  const handleCloseCarrera = () => {
    setSelectedCarrera(null);
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTop = scrollPosition;
      }
    }, 0);
  };

  return (
    
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-20 bg-[#FF6831] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#E5551C] transition-colors font-semibold"
      >
        Solicita información
      </button>

      <div className="flex flex-1 overflow-hidden">
        <main ref={mainRef} className={`flex-1 ${selectedCarrera ? 'overflow-hidden' : 'overflow-y-auto'} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
          <div className={selectedCarrera ? 'hidden' : ''}>
            <div className="banner">
            <BannerSlider />
            
          </div>

          <section className="max-w-6xl mx-auto px-6">
            <TitleText 
              props={{
                title: "Lo que nos hace diferentes",
                text: "Nuestra formación académica se une al desarrollo integral de cada estudiante para vivir la excelencia profundamente humana al más alto nivel."
              }} />
              <div className="flex flex-wrap gap-15 pt-2 pb-6 ">
                <Card
                  props={{
                    image : "/diferentes-1.png",
                    bgColor: "#79888F",
                    title: "Intercambios en todas las carreras",
                    description: "Con una red internacional de universidades: La Sabana en Colombia, Navarra en España, Austral en Argentina, la Panamericana en México, entre muchas otras."
                  }} />
                <Card
                  props={{
                    image : "/diferentes-2.png",
                    bgColor: "#E27A55",
                    title: "Intercambios en todas las carreras",
                    description: "Con una red internacional de universidades: La Sabana en Colombia, Navarra en España, Austral en Argentina, la Panamericana en México, entre muchas otras."
                  }} />
                  <Card
                  props={{
                    image : "/diferentes-3.png",
                    bgColor: "#E69456",
                    title: "Intercambios en todas las carreras",
                    description: "Con una red internacional de universidades: La Sabana en Colombia, Navarra en España, Austral en Argentina, la Panamericana en México, entre muchas otras."
                  }} />
                  <Card
                  props={{
                    image : "/diferentes-4.png",
                    bgColor: "#86A7B2",
                    title: "Intercambios en todas las carreras",
                    description: "Con una red internacional de universidades: La Sabana en Colombia, Navarra en España, Austral en Argentina, la Panamericana en México, entre muchas otras."
                  }} />
              </div>
            <TitleText 
              props={{
                title: "Nuestras Carreras",
                text: "Nuestra oferta académica refleja una excelencia profundamente humana. Cada programa está diseñado para acompañar a su hija/o en un camino formativo que integra conocimiento, propósito y compromiso."
              }} />
            <div className="flex flex-wrap lg:justify-start justify-center gap-x-9 gap-y-15 pt-1 pb-20">
              {carreras.map(carrera => (
                <CardCarrera 
                key={carrera.id}
                  onClick={() => handleCarreraClick(carrera.id)}
                  props={{
                    nombre: carrera.nombre,
                    duracion: carrera.duracion,
                    slug: carrera.slug
                  }} />
              ))}
            </div>
          </section>
          <Footer />
          </div>

          
          {carreras.map(carrera => (
            <div key={carrera.id} className={`h-full overflow-y-auto bg-[#3D494E] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${selectedCarrera === carrera.id ? 'block' : 'hidden'}`}>
              <div className="flex justify-start md:justify-start lg:justify-between xl:justify-start items-center relative text-white" style={{backgroundImage: `url(/carreras/bg-${carrera.slug}.png)`, backgroundSize: `cover`, backgroundPosition: `center`}}>
                <div className="absolute xl:top-12 xl:right-12 lg:top-9 lg:right-9 top-6 right-6 z-10">
                  <button onClick={handleCloseCarrera} className="uppercase font-semibold text-sm cursor-pointer tracking-wider flex items-center gap-4">
                    VOLVER AL INICIO
                    <Image
                      src="/close.svg"
                      width={28}
                      height={28}
                      alt="Universidad Hemisferios"
                      className="hidden lg:block"
                    />
                     <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt="Universidad Hemisferios"
                      className="lg:hidden block"
                    />
                    </button>
                </div>
                <h1 className="uppercase font-black lg:pl-16 pl-8 max-w-2/5">{carrera.nombre}</h1>
                <img className="max-w-1/2 lg:h-110 h-65 object-cover lg:pt-10 sm:pt-0 pt-10 xl:pt-0 xl:ml-15" src={`/carreras/personaje-${carrera.slug}.png`} alt="" />
                <div className="absolute w-1/3 text-center lg:right-0 lg:left-16 left-8 md:bottom-2 bottom-4">
                  <img src="/slogan-estudiantes.png" alt="" />
                </div>
              </div>
              <footer className="text-white flex flex-col justify-between">
                  <div className="flex max-w-6xl mx-auto px-7 gap-5 lg:gap-25 justify-between py-10 flex-col lg:flex-row bg-[#3D494E]">
                      <div className="flex flex-col justify-between lg:w-1/2 w-full max-w-125">
                          <p className="lg:text-xl text-base">Tendrás la disponibilidad de un espacio en nuestras instalaciones para coworking en nuestro centro empresarial, mientras introduces tu empresa al mercado (hasta 7 meses).</p>
                          <Image
                              src="/uhe-universidad-hemisferios.png"
                              width={299}
                              height={55}
                              alt="Universidad Hemisferios"
                              className="lg:block hidden"
                          />
                      </div>
                      <div className="flex flex-col gap-4 lg:w-1/2 w-full max-w-120 justify-between">
                        <div className="flex gap-8">
                          <div className="w-1/3">
                            <strong>Título:</strong>
                          </div>
                          <div className="w-2/3">
                            <p>Licenciado/a en Administración de Empresas</p>
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div className="w-1/3">
                            <strong>Duración: </strong>
                          </div>
                          <div className="w-2/3">
                            <p>7 Semestres (incluye prácticas laborales y titulación).</p>
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div className="w-1/3">
                            <strong>Intercambios:</strong>
                          </div>
                          <div className="w-2/3">
                            <p>Más de 30 intercambios en 10 países.</p>
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div className="w-1/3">
                            <strong>Certificaciones:</strong>
                          </div>
                          <div className="w-2/3">
                            <p>Digital Marketing & E-Business, Fintech & Stock Market, Project Management & Agile Methodologies. </p>
                          </div>
                        </div>
                      </div>
                  </div>
                <Legal />
              </footer>
            </div>
          ) )}
          
        </main>

        <Sidebar carreras={carreras} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </div>
  );
}
