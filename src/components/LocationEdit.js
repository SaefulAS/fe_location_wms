import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const LocationEdit = () => {
  const [site, setSite] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [rack, setRack] = useState("");
  const [rack_level, setRacklevel] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchLocation = async () => {
      const result = await axios.get(`http://localhost:3300/location/${id}`);
      setSite(result.data.site);
      setBuilding(result.data.building);
      setFloor(result.data.floor);
      setRack(result.data.rack);
      setRacklevel(result.data.rack_level);
    };
    fetchLocation();
  }, [id]);

  const updateLocation = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3300/location/${id}`, {
      site: site,
      building: building,
      floor: floor,
      rack: rack,
      rack_level: rack_level,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={updateLocation}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="site">
            Site
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="building"
          >
            Building
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Building"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="floor">
            Floor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Floor"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="rack">
            Rack
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Rack"
            value={rack}
            onChange={(e) => setRack(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="racklevel"
          >
            Rack Level
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Rack Level"
            value={rack_level}
            onChange={(e) => setRacklevel(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default LocationEdit;