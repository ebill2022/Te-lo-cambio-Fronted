import React, { useState }  from 'react';
import Header from './Header';
import Sidebar from './Sidebar'; 
import crud from '../conexiones/crud';
import { Link, useNavigate } from 'react-router-dom';

const CrearCategoria = () => {
  const navigate = useNavigate(); 
    
    const [categoria, setCategoria] = useState({
        nombre:'',
        imagen:''
      })
      
    const { nombre, imagen } = categoria;

      const onChange = (e) =>{
        setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
        })
      }

      const crearCategoria = async () =>{
        const data = {
          nombre: categoria.nombre,
          imagen: categoria.imagen
        }
       
          const response = await crud.POST(`/api/categoria`, data);
          const mensaje = response.msg;
          console.log(mensaje);
          navigate("/admin");
         
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        crearCategoria();
      }
      
  return (
    <>
      <Header/>
      <div className='md:flex md:min-h-screen'>
        <Sidebar/>
        <main className='flex-1'>
        <div className='mt-8 flex justify-center'>
        <h2 className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500 bg-clip-text font-serif text-5xl tracking-tight text-transparent">
              Crear Categoria
            </h2>
        </div>
        
        <div className='mt-10 flex justify-center' >
        <form 
              className='my-10 bg-white shadow rounded-lg p-10 '
              onSubmit={onSubmit}
            >
              <div className='my-5'>
                <label className='uppercase text-gray-600 block text-xl font-serif' >Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder='nombre'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                 value={nombre}
                  onChange={onChange}
                />

              <label className='uppercase text-gray-600 block text-xl font-serif' >Insertar imagen: </label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder='imagen'
                  className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                  value={imagen}
                  onChange={onChange}
                />
              </div>

              <input 
                type="submit"
                value="Crear Categoria"
                className="bg-gradient-to-r from-green-400 to-blue-500 -mb-5 w-full py-2 hover:from-pink-500 hover:to-yellow-500 text-white uppercase font-serif rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
            />

            </form>
        </div >
       
      
        </main>
      </div>
      
  
      
      
      </>
    );
}

export default CrearCategoria;