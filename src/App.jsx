import React from 'react';
import Buscador from './components/Buscador';
import ApiData from './components/ApiData';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <div className='titulo'>
        <div className='headliner'>
        <h1>Busca a tu mejor amigo</h1>
        <p>Tener un perro puede mejorar la salud mental al proporcionar compañía y afecto incondicional, reducir el estrés y la ansiedad, promover la actividad física y social, establecer rutinas reconfortantes, y ofrecer un sentido de propósito y responsabilidad en la vida diaria.</p>
        <ApiData Buscador={Buscador} />

        </div>
        
        
        </div>
      
      
    </div>
  );
}

export default App;
