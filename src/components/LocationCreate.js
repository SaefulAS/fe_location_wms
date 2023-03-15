import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LocationCreate = () => {
  const [site, setSite] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [rack, setRack] = useState("");
  const [rack_level, setRacklevel] = useState("");
  const navigate = useNavigate();

  const createLocation = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3300/api/location", {
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

  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/2">
        <form onSubmit={createLocation}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="site"
            >
              Site
            </label>
            <input
              type="text"
              id="site"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="Site"
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
              type="text"
              id="building"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              placeholder="Building"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="floor"
            >
              Floor
            </label>
            <input
              type="text"
              id="floor"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              placeholder="Floor"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="rack"
            >
              Rack
            </label>
            <input
              type="text"
              id="rack"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rack}
              onChange={(e) => setRack(e.target.value)}
              placeholder="Rack"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="rack-level"
            >
              Rack Level
            </label>
            <input
              type="text"
              id="rack-level"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rack_level}
              onChange={(e) => setRacklevel(e.target.value)}
              placeholder="Rack Level"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationCreate;

// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const LocationCreate = () => {
//   const [site, setSite] = useState("");
//   const [building, setBuilding] = useState("");
//   const [floor, setFloor] = useState("");
//   const [rack, setRack] = useState("");
//   const [rack_level, setRacklevel] = useState("");
//   const history = useHistory();

//   const createLocation = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:3300/api/location", {
//       site: site,
//       building: building,
//       floor: floor,
//       rack: rack,
//       rack_level: rack_level,
//     });
//     history.push("/");
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={createLocation} className="w-1/2">
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

//         <div className="mb-6">
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

//         <div class="flex justify-center mt-4">
//           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default LocationCreate;
