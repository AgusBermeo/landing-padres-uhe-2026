'use client'

import Image from "next/image";
import { useState } from "react";

export default function Sidebar({ carreras, isOpen = false, onClose = () => {} }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // You can replace this with your actual API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
          {/* Overlay for mobile */}
          {isOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-30"
              onClick={onClose}
            ></div>
          )}
          
          {/* Sidebar */}
          <aside className={`w-90 bg-[#E7EDEF] p-4 border-l border-gray-200 overflow-y-auto lg:block transition-transform duration-300 ease-in-out
            ${isOpen ? 'fixed right-0 top-0 bottom-0 z-40 translate-x-0' : 'fixed lg:relative -right-90 lg:right-0 translate-x-full lg:translate-x-0'}`}>
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
          <div className="sticky top-0 px-6 pt-4">
            <h4 className="text-xl font-bold text-center">Solicita información ahora</h4>
            <form onSubmit={handleSubmit} method="POST" className="mt-6">
              <div className="relative mb-7">
                <select 
                  name="Carrera" 
                  id="carrera" 
                  required 
                  defaultValue={""}
                  className="text-[#323E48] block cursor-pointer appearance-none form-select focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option value="" disabled hidden >Carrera de interés</option>
                  {carreras.map((carrera) => (
                    <option key={carrera.id} value={carrera.nombre}>{carrera.nombre}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white bg-[#FF6831] rounded-tr-lg rounded-br-lg">
                  <svg className="fill-current h-6 w-6" xmlns="www.w3.org" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div className="relative mb-7">
                <input type="text" 
                  name="Nombre del representante" 
                  placeholder="Nombre del representante" 
                  id="nombre_representante"
                  required
                  className="form-input" />
                <Image
                  src="/ic-user.png"
                  alt="Icono de usuario"
                  width={13}
                  height={15}
                  className="absolute top-4 left-4"
                />
              </div>
              <div className="relative mb-7">
                <input type="text" 
                  name="Apellido del representante" 
                  placeholder="Apellido del representante" 
                  id="apellido_representante"
                  required
                  className="form-input" />
                <Image
                  src="/ic-user.png"
                  alt="Icono de usuario"
                  width={13}
                  height={15}
                  className="absolute top-4 left-4"
                />
              </div>
              <div className="relative mb-7">
                <input type="email" 
                  name="Correo del representante" 
                  placeholder="Correo del representante" 
                  id="correo"
                  required
                  className="form-input" />
                <Image
                  src="/ic-arroba.png"
                  alt="Icono de mail"
                  width={17}
                  height={17}
                  className="absolute top-4 left-4"
                />
              </div>
              <div className="relative mb-7">
                <input type="tel" 
                  name="Celular del representante" 
                  placeholder="Celular del representante" 
                  id="celular"
                  required
                  className="form-input" />
                <Image
                  src="/ic-phone.png"
                  alt="Icono de teléfono"
                  width={13}
                  height={17}
                  className="absolute top-4 left-4"
                />
              </div>
              <div className="relative mb-7">
                <input type="text" 
                  name="Nombre del estudiante" 
                  placeholder="Nombre del estudiante" 
                  id="nombre_estudiante"
                  required
                  className="form-input" />
                <Image
                  src="/ic-user.png"
                  alt="Icono de usuario"
                  width={13}
                  height={15}
                  className="absolute top-4 left-4"
                />
              </div>
              <div className="relative mb-7">
                <input type="text" 
                  name="Apellido del estudiante" 
                  placeholder="Apellido del estudiante" 
                  id="apellido_estudiante"
                  required
                  className="form-input" />
                <Image
                  src="/ic-user.png"
                  alt="Icono de usuario"
                  width={13}
                  height={15}
                  className="absolute top-4 left-4"
                />
              </div>
              <label className="block mt-6 mb-9 relative rounded-lg before:content-[''] before:white before:rounded-full before:p-1.25 before:top-2 before:left-0.75 before:absolute has-checked:before:bg-[#f7632f] cursor-pointer">
                <div className="flex items-start">
                    <input type="checkbox" className="hidden" required />
                    <div className="rounded-full mt-1 p-2 bg-white border border-gray-600"></div>
                    <span className="text-sm ml-2">Acepto la <a className="font-bold underline" target="_blank" href="https://www.uhemisferios.edu.ec/politica-de-privacidad/">Política del Tratamiento de Datos Personales</a>.</span>
                </div>
              </label>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                  ¡Gracias! Tu solicitud ha sido enviada exitosamente.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
                </div>
              )}

              <div className="relative">
                <input 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3D494E] text-white overflow-hidden rounded-lg py-3 pl-7 pr-19 w-full cursor-pointer hover:bg-[#353f44] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                value={isSubmitting ? "Enviando..." : "Enviar"} />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white bg-[#FF6831] rounded-tr-lg rounded-br-lg">
                  <svg className="fill-current h-6 w-6 -rotate-90" xmlns="www.w3.org" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </form>
          </div>
        </aside>
        </>
    )
}