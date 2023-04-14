import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const LocationEdit = () => {
  const [site, setSite] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [rack, setRack] = useState("");
  const [rack_level, setRacklevel] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getLocationById();
  }, []);
 
  const updateLocation = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3300/api/location/${id}`, {
        site,
        building,
        floor,
        rack,
        rack_level,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getLocationById = async () => {
    const response = await axios.get(`http://localhost:3300/api/location/${id}`);
    setSite(response.data.site);
    setBuilding(response.data.building);
    setFloor(response.data.floor);
    setRack(response.data.rack);
    setRacklevel(response.data.rack_level);
  };
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 justify-center">
      <div>
        <form onSubmit={updateLocation}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="site">
              Site
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="Site"
              id="site"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="building">
              Building
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              placeholder="Building"
              id="building"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="floor">
              Floor
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              placeholder="Floor"
              id="floor"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rack">
              Rack
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rack}
              onChange={(e) => setRack(e.target.value)}
              placeholder="Rack"
              id="rack"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rack_level">
              Rack Level
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rack_level}
              onChange={(e) => setRacklevel(e.target.value)}
              placeholder="Rack Level"
              id="rack_level"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default LocationEdit;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";

// const LocationEdit = () => {
//   const [site, setSite] = useState("");
//   const [building, setBuilding] = useState("");
//   const [floor, setFloor] = useState("");
//   const [rack, setRack] = useState("");
//   const [rack_level, setRacklevel] = useState("");
//   const history = useHistory();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchLocation = async () => {
//       const result = await axios.get(`http://localhost:3300/api/location/${id}`);
//       setSite(result.data.site);
//       setBuilding(result.data.building);
//       setFloor(result.data.floor);
//       setRack(result.data.rack);
//       setRacklevel(result.data.rack_level);
//     };
//     fetchLocation();
//   }, [id]);

//   const updateLocation = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3300/api/location/${id}`, {
//       site: site,
//       building: building,
//       floor: floor,
//       rack: rack,
//       rack_level: rack_level,
//     });
//     history.push("/");
//   };

//   return (
//     <div>
//       <form onSubmit={updateLocation}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="site">
//             Site
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Site"
//             value={site}
//             onChange={(e) => setSite(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="building"
//           >
//             Building
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Building"
//             value={building}
//             onChange={(e) => setBuilding(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="floor">
//             Floor
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Floor"
//             value={floor}
//             onChange={(e) => setFloor(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="rack">
//             Rack
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Rack"
//             value={rack}
//             onChange={(e) => setRack(e.target.value)}
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="racklevel"
//           >
//             Rack Level
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Rack Level"
//             value={rack_level}
//             onChange={(e) => setRacklevel(e.target.value)}
//           />
//         </div>

//         <div className="flex items-center justify-center">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Update
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default LocationEdit;