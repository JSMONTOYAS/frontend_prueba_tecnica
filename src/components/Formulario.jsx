import { useEffect, useState } from 'react';
import { createAspirante, updateAspirante } from '../services/api';
import crear from "../assets/Icon_crear.svg";
import ubicacion from "../assets/Icon_puntoubicacion1.svg";
import vehiculo from "../assets/Icon_vehiculo1.svg";
import persona from "../assets/Icon_persona1.svg";
import ubicacion1 from "../assets/Icon_puntoubicacion.svg";
import vehiculo1 from "../assets/Icon_vehiculo.svg";
import persona1 from "../assets/Icon_persona.svg";
import cancelar from "../assets/Icon_cancelar.svg";
import confirmar from "../assets/Icon_confirmar.svg";

export default function Formulario({ onAdd, aspiranteEditar, cancelarEdicion }) {
  const [form, setForm] = useState({
    marca: '',
    sucursal: '',
    aspirante: ''
  });

  const [activo, setActivo] = useState(false); // controla si el formulario está editable

  // Cargar los datos del aspirante a editar si existen
  useEffect(() => {
    if (aspiranteEditar) {
      setForm({
        marca: aspiranteEditar.marca,
        sucursal: aspiranteEditar.sucursal,
        aspirante: aspiranteEditar.aspirante
      });
      setActivo(true);
    }
  }, [aspiranteEditar]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.marca || !form.sucursal || !form.aspirante) return;

    try {
      if (aspiranteEditar) {
        // 🛠 Editar aspirante
        await updateAspirante(aspiranteEditar.id, form);
      } else {
        // ➕ Crear aspirante
        await createAspirante(form);
      }

      setForm({ marca: '', sucursal: '', aspirante: '' });
      setActivo(false);
      onAdd();
    } catch (error) {
      console.error('Error al guardar aspirante:', error);
    }
  };

  const handleCancelar = () => {
    setActivo(false);
    setTimeout(() => {
      setForm({ marca: '', sucursal: '', aspirante: '' });
      if (cancelarEdicion) cancelarEdicion(); // notifica al padre que se canceló edición
    }, 300);
  };

  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl shadow-md p-4">
      {/* Botón + solo visible si no estamos editando */}
      {!aspiranteEditar && (
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setActivo(true)}
            className="text-cyan-500 text-3xl font-bold hover:scale-110 transition-transform duration-300"
          >
            <img src={crear} alt="Crear aspirante" className="inline-block" />
          </button>
        </div>
      )}

      {/* Inputs */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
            <img
              src={activo ? vehiculo : vehiculo1}
              alt="Vehículo"
              className="inline-block"
            />
          </span>
          <input
            name="marca"
            placeholder="Marca"
            value={form.marca}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded bg-white"
            disabled={!activo}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
          <img
            src={activo ? ubicacion : ubicacion1}
            alt="Ubicación"
            className="inline-block"
          />
          </span>
          <input
            name="sucursal"
            placeholder="Sucursal"
            value={form.sucursal}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded bg-white"
            disabled={!activo}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
            <img
              src={activo ? persona : persona1}
              alt="Aspirante"
              className="inline-block"
            />
          </span>
          <input
            name="aspirante"
            placeholder="Aspirante"
            value={form.aspirante}
            onChange={handleChange}
            className="w-full px-3 py-1 border rounded bg-white"
            disabled={!activo}
          />
        </div>
      </div>

      {/* Botones */}
      <div
        className={`flex justify-end mt-4 gap-2 transition-all duration-500 ${
          activo ? 'opacity-100 scale-100' : 'opacity-0 scale-0 h-0 overflow-hidden'
        }`}
      >
        <button
          type="button"
          onClick={handleCancelar}
          className=" px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          <img src={cancelar} alt="Cancelar" className="inline-block mr-2" />
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2  transition"
        >
          <img src={confirmar} alt="Confirmar" className="inline-block mr-2" />
        </button>
      </div>
    </div>
  );
}
