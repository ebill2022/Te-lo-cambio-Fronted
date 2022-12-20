import React from 'react'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside className='md:w-45 lg:w-90 px-4 py-10 inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500'>
       <p className='text-xl font-bold'></p>
        <Link 
            to={"/crear-categorias"}
            className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  uppercase  text-white font-bold text-center rounded-lg mb-1 md:mb-0 "
            >Crear Categorias</Link>

      <div className='py-10'>
      <Link 
            to={"/admin"}
            className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  uppercase    text-white font-bold text-center rounded-lg mb-1 md:mb-0 "
            >Configuracion</Link>
      </div>
    </aside>
    );
}

export default Sidebar;