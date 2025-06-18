import { Link } from "react-router-dom";
import phoneImg from '../assets/Telefono-01.png';
import logo from '../assets/Imagologo_motion.svg'; 

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-20">
        <img src={logo} alt="logo" className="h-10" />
      </div>

        {/* Sombra curva decorativa derecha con animación */}
        <div className="absolute top-0 right-0 w-full h-full bg-white rounded-l-full shadow-xl z-0 animate-fill-left" />


      {/* Texto "BIENVENIDO A" detrás de la imagen */}
      <div className="absolute top-1/4 w-full text-center z-0">
        <h1 className="font-montserrat font-bold text-[140px] leading-[1] tracking-[0] text-blue-800 opacity-30">
         BIENVENIDO A
        </h1>

      </div>

      {/* Imagen del celular */}
      <div className="relative z-10 flex justify-center mt-36">
        <img src={phoneImg} alt="Mockup" className="w-[300px] md:w-[400px]" />
      </div>

      {/* Texto "MONITORING INNOVATION" delante de la imagen */}
      <div className="absolute top-[45%] w-full text-center z-20">
       <h2
          className="font-montserrat font-bold text-[90px] leading-[1] tracking-[0] text-blue-900 relative z-20"
            style={{
                WebkitTextStroke: '2px white',
                color: '#1e3a8a' // azul Tailwind: text-blue-900
            }}
            >
           MONITORING INNOVATION
        </h2>


      </div>

      {/* Botón para entrar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <Link to="/aspirantes" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Entrar al sistema
        </Link>
      </div>

      {/* Menú inferior */}
      <div className="absolute bottom-6 w-full text-center text-xs text-cyan-600 flex justify-center gap-8 z-30">
        <a href="http://monitoringinnovation.com" className="hover:underline">MONITORINGINNOVATION</a>
        <a href="https://www.gpscontrol.co" className="hover:underline">GPS CONTROL</a>
        <a href="https://github.com/JSMONTOYAS/Prueba_tecnica_front" className="hover:underline">Link repo front</a>
        <a href="https://github.com/JSMONTOYAS/Prueba_tecnica_back" className="hover:underline">Link repo back</a>
      </div>
    </div>
  );
}
