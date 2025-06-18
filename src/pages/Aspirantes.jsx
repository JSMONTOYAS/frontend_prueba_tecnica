import Formulario from "../components/Formulario";
import TablaAspirantes from "../components/TablaAspirantes";
import { useState } from "react";
import logo from "../assets/Imagologotipo_motion.svg"; 

export default function Aspirantes() {
  const [refresh, setRefresh] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const recargar = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between py-6">
      {/* Contenedor principal: formulario + tabla */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl px-6">
              <Formulario 
                  onAdd={recargar} 
                  aspiranteEditar={editingData} 
                  cancelarEdicion={() => setEditingData(null)} 
                />
      {/* Tabla de aspirantes */}
        <div className="flex-1 p-4">
          <TablaAspirantes key={refresh} onEdit={setEditingData} />
        </div>
      </div>

      {/* Logo centrado abajo */}
      <img src={logo} alt="logo" className="h-12 mt-6" />
    </div>
  );
}
