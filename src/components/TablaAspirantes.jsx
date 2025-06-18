import { useEffect, useState } from 'react';
import { getAspirantes, deleteAspirante } from '../services/api';
import cancelar from "../assets/Icon_eliminar1.svg"; 
import editar from "../assets/Icon_editar1.svg";

export default function TablaAspirantes({ onEdit }) {
  const [aspirantes, setAspirantes] = useState([]);
  const [animaciones, setAnimaciones] = useState({}); // para controlar animación por id

  const cargarDatos = async () => {
    try {
      const response = await getAspirantes();
      setAspirantes(response.data);
    } catch (error) {
      console.error("Error al obtener los aspirantes:", error);
    }
  };

  const eliminar = async (id) => {
    setAnimaciones((prev) => ({ ...prev, [id]: true }));

    setTimeout(async () => {
      try {
        await deleteAspirante(id);
        cargarDatos();
      } catch (error) {
        console.error("Error al eliminar el aspirante:", error);
      }
    }, 400); // Tiempo de la animación
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4">
      {aspirantes.length === 0 ? (
        <p className="text-gray-500">No hay aspirantes registrados.</p>
      ) : (
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-blue-100">
            <tr style={{ backgroundColor: '#E280BE' }}>
              <th className="p-2">Marca</th>
              <th className="p-2">Sucursal</th>
              <th className="p-2">Aspirante</th>
            </tr>
          </thead>
          <tbody>
            {aspirantes.map((a) => (
              <tr
                key={a.id}
                className={`border-t transition-all duration-500 ${
                  animaciones[a.id] ? 'translate-x-[-100%] opacity-0' : ''
                }`}
              >
                <td className="p-2">{a.marca}</td>
                <td className="p-2">{a.sucursal}</td>
                <td className="p-2 space-x-2">{a.aspirante}
                  <button 
                    style={{ marginLeft: '70px' }}
                    onClick={() => onEdit(a)}
                    className="text-yellow-600 hover:scale-110 transition-transform"
                    title="Editar"
                  >
                    <img src={editar} alt="Editar" className="inline-block" />
                  </button>
                  <button
                    onClick={() => eliminar(a.id)}
                    className="text-red-600 hover:scale-110 transition-transform"
                    title="Eliminar"
                  >
                    <img src={cancelar} alt="Eliminar" className="inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
