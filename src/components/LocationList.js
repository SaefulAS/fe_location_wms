import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LocationList = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getLocationList();
  }, []);

  const getLocationList = async () => {
    const response = await axios.get('http://localhost:3300/location');
    setLocation(response.data.locations);
  };

  const deleteLocation = async (id) => {
    await axios.delete(`http://localhost:3300/location/${id}`);
    getLocationList();
  };

  return (
    <div className="mt-2">
      <Link
        to="/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
      >
        Add Location
      </Link>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Site</th>
            <th className="px-4 py-2">Building</th>
            <th className="px-4 py-2">Floor</th>
            <th className="px-4 py-2">Rack</th>
            <th className="px-4 py-2">Rack Level</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {location.map((location, index) => (
            <tr key={location.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{location.site}</td>
              <td className="border px-4 py-2">{location.building}</td>
              <td className="border px-4 py-2">{location.floor}</td>
              <td className="border px-4 py-2">{location.rack}</td>
              <td className="border px-4 py-2">{location.rack_level}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/edit/${location.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteLocation(location.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LocationList;

