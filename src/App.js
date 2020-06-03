import React from 'react';
import MapContainer from "./components/MapContainer";
import RestoList from "./components/RestoList";

function App() {
  return (
      <div className="container-fluid">
          <div className="row no-gutters">
              <div className="col-sm-6 col-lg-7 ">
                  <MapContainer/>
              </div>
              <div className="col-sm-6 col-lg-5">
                  <RestoList/>
              </div>
          </div>
      </div>
  );
}

export default App;
