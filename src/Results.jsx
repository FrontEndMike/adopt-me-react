import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
