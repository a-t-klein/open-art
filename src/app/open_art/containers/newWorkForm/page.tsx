"use client";
import React from "react"
import { Button } from "@material-tailwind/react";


const newWorkForm = () => {
  //create a new work in the DB;

  const createNewArtwork = () => {
    console.log("new work!!");
  };

  const fields = [
    {
      label: "title",
      dataType: "number",
      required: true,
    },
    {
      label: "year",
      dataType: "number",
      required: true,
    },
    {
      label: "medium",
      dataType: "string",
      required: true,
    },
    {
      label: "length",
      dataType: "number",
      required: false,
    },
    {
      label: "width",
      dataType: "number",
      required: false,
    },
    {
      label: "height",
      dataType: "number",
      required: false,
    },
    {
      label: "weight",
      dataType: "number",
      required: false,
    },
    {
      label: "duration",
      dataType: "number",
      required: false,
    },
    {
      label: "multiple",
      dataType: "boolean",
      required: true,
    },
    {
      label: "series number",
      dataType: "boolean",
      required: false,
    },
    {
      label: "description",
      dataType: "string",
      required: false,
    },
    // this can be an auto complete form that looks for cities
    {
      label: "location",
      dataType: "boolean",
      required: false,
    },
    {
      //this is going to have to be an image import option
      label: "image",
      dataType: "boolean",
      required: false,
    },
  ];

  return (
    <div>
      <form>
        <input
          type="submit"
          value="submit"
          onClick={() => createNewArtwork()}
        />
      </form>

      <Button>X</Button>
    </div>
  );
};

export default newWorkForm;