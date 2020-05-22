import React from 'react';
import MapContainer from "./components/MapContainer";
import RestoList from "./components/RestoList";

function App() {
  return (
      <div className="container-fluid">
          <div className="row no-gutters">
              <div className="col-6 col-md-7">
                  <MapContainer/>
              </div>
              <div className="col-6 col-md-5">
                  <RestoList/>
              </div>
          </div>
      </div>
  );
}

export default App;
