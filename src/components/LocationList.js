import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

const LocationList = () => {
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    getLocationList();
  }, []);

  const getLocationList = async () => {
    const response = await axios.get("http://localhost:3300/api/location");
    setLocation(response.data);
  };

  const handleDelete = async (uuid) => {
    // tambahkan parameter id
    try {
      await axios.delete(`http://localhost:3300/api/locations/${uuid}`);
      console.log("Location deleted successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col mt-5 items-center">
      <div className="w-full sm:w-1/2 mb-4">
        <Link
          to={`add`}
          className="bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add Location
        </Link>
      </div>
      <div className="w-full sm:w-1/2">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Site
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Building
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Floor
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rack
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rack Level
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {locations.map((location, index) => (
              <tr key={location.uuid}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{location.site}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {location.building}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {location.floor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{location.rack}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {location.rack_level}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`edit/${location.uuid}`}
                    className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(location.uuid)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocationList;
