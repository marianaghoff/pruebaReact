import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Buscador from './Buscador';

const ApiData = () => {
  const [dogData, setDogData] = useState([]);
  const [busquedaUsuario, setBusquedaUsuario] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        setDogData(response.data);
      } catch (error) {
        console.error('Error fetching dog data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setBusquedaUsuario(event.target.value);
  };

  const renderImage = (referenceId) => `https://cdn2.thedogapi.com/images/${referenceId}.jpg`;

  const filterDogs = () => dogData.filter(dog => dog.name.toLowerCase().includes(busquedaUsuario.toLowerCase()));

  return (
    <div>
      <Buscador searchTerm={busquedaUsuario} onSearch={handleSearch} />
      <div className="header">
        {filterDogs().map((dog, index) => (
          <div key={index} className="dogInfo">
            <h3>{dog.name}</h3>
            <img src={renderImage(dog.reference_image_id)} alt={dog.name} />
            <p>Grupo de raza: {dog.breed_group}</p>
            <p>Expectativa de vida: {dog.life_span}</p>
            <p>Origen: {dog.origin}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiData;
