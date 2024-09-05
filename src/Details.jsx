import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  console.log(results, "results");

  if (results.isLoading) {
    console.log("loading");
    return (
      <div className="loading-pane">
        <img
          className="loader"
          src="../src/images/loader.png"
          alt="loading animation"
        />
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal}</h2>
        <h2>{pet.breed}</h2>
        <h2>
          {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
