import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogin = () => {

    const navigate = useNavigate();

    return (
        <header className='container justify-between mx-auto px-4 py-5 border-b'>
            <img className="float-left w-20 h-20 rounded-full mx-auto"
                src="https://res.cloudinary.com/doiyrdae3/image/upload/v1671338232/telocambiologoeditado_cjfxqd.png"
                alt=""></img>
            <div className='md:flex md:justify-between'>
                <h1 className="inline bg-gradient-to-r from-green-400 to-blue-500 -mb-5 w-full py-2 hover:from-pink-500
                 hover:to-yellow-500 bg-clip-text font-display text-6xl tracking-tight text-transparent">
                    Te Lo Cambio
                </h1>
            </div>
        </header>

    );
}

export default HeaderLogin;