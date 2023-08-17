"use client";
import React, { ReactNode } from "react"; // Import ReactNode
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import newWorkForm from "../newWorkForm/page";

const artWorkDashboard = () => {
  const [artWorkData, setArtworkData] = useState([]);
  const [newWorkPopup, setNewWorkPopup] = useState(false);

  // we should be able to filter based on date of creation, medium?, etc. 



  useEffect(()=>{
    // update artwork to display each time artWorkData is updated; 
    console.log('in artWorkData useEffect')
    console.log()
  },[artWorkData]);





  //function to map artWorkData to 'artwork components'
  const artworks: ReactNode[] = []; // Use ReactNode type
  return (
    // button to create a new artwork
    // conditionally render the popup;
    <div>
      {artworks}
      <Button onClick={() => setNewWorkPopup(!newWorkPopup)}>
        New Artwork
      </Button>
      {newWorkPopup && newWorkForm()}
    </div>
  );
};

export default artWorkDashboard;
