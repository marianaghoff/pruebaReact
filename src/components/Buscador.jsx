import React from 'react';

const Buscador = ({ searchTerm, onSearch, onSort }) => (
  <div>
    <input
      type="text"
      placeholder="Buscar raza de perro"
      value={searchTerm}
      onChange={onSearch}
    />
  </div>
);

export default Buscador;

