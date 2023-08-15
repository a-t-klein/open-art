import React from "react";
import { useState } from "react";

const artWorkDashboard = () => {
  const [artWorkData, setArtworkData] = useState([]);
  const [newWorkPopup, setNewWorkPopup] = useState([]);

  //function to map artWorkData to 'artwork components'
  const artworks: any[] = [];
  return (
    // button to create a new artwork
    // conditionally render the popup; 
    <div>{artworks}</div>
  );
};

export default artWorkDashboard;
