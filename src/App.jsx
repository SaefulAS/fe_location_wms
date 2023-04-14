import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LocationList from "./components/LocationList";
import LocationCreate from "./components/LocationCreate";
import LocationEdit from "./components/LocationEdit";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocationList/>}/>
        <Route path="add" element={<LocationCreate/>}/>
        <Route path="edit/:id" element={<LocationEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;

// import React, { useState, lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ErrorBoundary from './components/ErrorBoundary';
// const LocationList = lazy(() => import('./components/LocationList'));
// const LocationCreate = lazy(() => import('./components/LocationCreate'));
// const LocationEdit = lazy(() => import('./components/LocationEdit'));
// const LocationHeader = lazy(() => import('./components/LocationHeader'));

// function App() {
//   const [location, setLocations] = useState([]);

//   return (
//     <ErrorBoundary>
//       <Router>
//         <div className="container">
//           <LocationHeader setSearchResults={setLocations} />
//           <div className="columns">
//             <div className="column is-half is-offset-one-quarter">
//               <Suspense fallback={<div>Loading...</div>}>
//                 <Switch>
//                   <Route exact path="/" render={() => <LocationList location={location} />} />
//                   <Route path="/add" element={<LocationCreate />} />
//                   <Route path="/edit/:id" element={<LocationEdit />} />
//                 </Switch>
//               </Suspense>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </ErrorBoundary>
//   );
// }

// export default App;
