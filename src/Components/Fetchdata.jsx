import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Fetchdata = () => {
  // dataType state variables

  const [dataType, setDataType] = useState('character');
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/${dataType}`)
      .then((response) => setItems(response.data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dataType]);

  return (
    <div>
      <h1>Rick and Morty Simple Fetcher</h1>

      <select style={{ padding: '8px 12px', borderRadius: '4px' }} onChange={(e) => setDataType(e.target.value)} value={dataType}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>
      
      {/* Displaying fetched data */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.id}: {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchdata;
