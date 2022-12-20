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
      <div class="relative h-40 m-2 overflow-hidden bg-indigo-500 rounded-lg">
      
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-2/3 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl font-serif">Telo cambio.com</h2>
      <div className='flex flex-initial w-32 md:flex-auto items-center gap-4'>
          <input
            type="submit"
            value="Cerrar Sesión"
            className=
            "bg-gradient-to-r from-green-400 to-blue-500 -mb-5 w-full py-2 hover:from-pink-500 hover:to-yellow-500 text-white uppercase font-bold rounded hover:cursor-pointer"
            onClick={cerrarSesion}
          />
        </div>
      <span></span>
    </div>
    
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/2 h-full bg-indigo-500"></div>
      <div class="relative w-1/3">
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-20 h-full text-indigo-500"
        >
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
        >
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>

  <div class="absolute top-0 right-0
  block w-9/12 h-full">
    <img
      alt="Snowy mountain lake"
      class="object-cover h-full min-w-full"
      src="https://res.cloudinary.com/doiyrdae3/image/upload/v1671562328/header_pcmlsx.jpg"
    />
  </div>
  
</div>
    </header>

  );
}

export default Header;