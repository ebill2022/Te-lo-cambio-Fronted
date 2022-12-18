import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className='px-4 py-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
      <div className='md:flex md:justify-between'>
        <h2 className='text-2xl  text-white uppercase font-bold rounded text-center mb-5 md:mb-0'>
          Te lo cambio, Panel de administrador
        </h2>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <input
            type="submit"
            value="Cerrar Sesión"
            className=
            "bg-gradient-to-r from-green-400 to-blue-500 -mb-5 w-full py-2 hover:from-pink-500 hover:to-yellow-500 text-white uppercase font-bold rounded hover:cursor-pointer"
            onClick={cerrarSesion}
          />
        </div>
      </div>
    </header>

  );
}

export default Header;