import React from 'react';
import MapContainer from "./components/MapContainer";
import RestoList from "./components/RestoList";

function App() {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-7">
                  <MapContainer/>
              </div>
              <div className="col-5">
                  <RestoList/>
              </div>
          </div>
      </div>
  );
}

export default App;
