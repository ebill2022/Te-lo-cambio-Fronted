import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderHome = () => {

    const navigate = useNavigate();

    return (
        <header className='container justify-between mx-auto px-4 py-5'>
            <img className="float-left w-20 h-20 rounded-full mx-auto"
                src="https://res.cloudinary.com/doiyrdae3/image/upload/v1671338232/telocambiologoeditado_cjfxqd.png"
                alt=""></img>
            <div className='md:flex md:justify-between'>
                <h1 className="inline bg-gradient-to-r from-green-400 to-blue-500 -mb-5 w-full py-2 hover:from-pink-500
                 hover:to-yellow-500 bg-clip-text font-serif text-6xl tracking-tight text-transparent">
                    Telo Cambio.com
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Link
                        to={"/login"}
                        className="block text-center my-5 bg-gradient-to-r from-green-400 to-blue-500 w-full py-2 hover:from-pink-500 hover:to-yellow-500w-full p-3 text-white uppercase font-bold rounded-lg"
                    >Inicio de Sesión</Link>
                </div>
            </div>
        </header>

    );
}

export default HeaderHome;