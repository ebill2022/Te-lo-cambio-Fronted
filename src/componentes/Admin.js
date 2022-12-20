import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import swal from 'sweetalert'; 

const Admin = () => {
  
  const navigate = useNavigate(); 

  useEffect(() =>{
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token")
      //console.log(token)
      if(!token){
        navigate("/login");
      }
    }
    autenticarUsuario()
  },[navigate]);// [] hacen que solo se ejecute una vez el useEffect

  const [categoria, setCategorias] = useState([]);

   const cargarCategorias = async () => {
       const response = await crud.GET(`/api/categoria`);
       //console.log(response);
       setCategorias(response.categoria);
   }

   useEffect(() => {
       cargarCategorias();
   }, [])


   const borrarCategoria = async (idCategoria) =>{
    swal({
      title: "¿Esta seguro de eliminar la categoria?",
      text: "una vez eliminado, no se podra rehacer",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        const response = crud.DELETE(`/api/categoria/${idCategoria}`);
        
        if(response){
          swal("La categoria se borro exitosamente", {
            icon: "success",
          });
        }
        cargarCategorias();
       
      } else {
        swal("cancelado");
      }
    });
   }

  return (
      <>
      <Header/>
      <div className='md:flex md:min-h-screen '>
      <Sidebar/>
      <main className= 'w-3/4 flex-1 justify-center'>
          <div class = "container mx-auto mt-2 md:mt-2 md:flex md:justify-center">
          <h1 className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  bg-clip-text font-serif text-5xl tracking-tight text-transparent py-5" _msthash="793222" _msttexthash="415337">Lista de Categorias</h1>
          </div>
   
          
    <table className="table table-bordered font-serif text-center text-gray-500 dark:text-gray-700">
        <thead className='bg-white'>
            <tr>
                <th style={{ width: '10%' }}>Imagen</th> 
                <th style={{ width: '50%'}}>Nombre</th> 
                <th style={{ width: '15%' }}>Opciones</th>
            </tr>
        </thead>
        
        <tbody className="bg-white">
            {
                categoria.map(
                    item =>
                        <tr key={item._id}>
                            <td><img src={item.imagen}></img></td>
                            <td>{item.nombre}</td>
                            <td>
                            <Link  
                                  to={`/home-productos/${item._id}`}
                                  className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  uppercase    text-white font-bold text-center rounded-lg mb-1 md:mb-0
                                 "
                                >Crear</Link>&nbsp;&nbsp;
                                <Link 
                                 to={`/actualizar-categoria/${item._id}`}
                                 className="inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  uppercase    text-white font-bold text-center rounded-lg mb-1 md:mb-0
                                 "
                                 >Editar</Link>&nbsp;&nbsp;
                                <button  
                                    onClick={()=>borrarCategoria(item._id)} class= " inline bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500  uppercase    text-white font-bold text-center rounded-lg mb-1 md:mb-0"
                                >Borrar</button>
                               
                            </td>
                        </tr>
                        )
                    }
        </tbody>
    </table>
</main>
</div>
      
      
    
      
      
      </>
    );
}

export default Admin;